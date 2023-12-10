# Install necessary packages
if (!require("rjags")) {
  install.packages("rjags")
}

if (!require("wbstats")) {
  install.packages("wbstats")
}

# Load necessary libraries
library(rjags)
library(wbstats)

# Fetch Japan's population data from World Bank's API
japan_pop_data <- wb(indicator = "SP.POP.TOTL", country = "JP", startdate = 1960, enddate = 2020)

# Prepare data for Bayesian analysis
data <- list(
  N = nrow(japan_pop_data),
  year = japan_pop_data$year,
  pop = japan_pop_data$SP.POP.TOTL
)

# Define the model
model_string <- "
model {
  for (i in 2:N) {
    pop[i] ~ dnorm(pop[i-1] + mu, tau)
  }
  mu ~ dnorm(0, 0.0001)
  tau <- pow(sigma, -2)
  sigma ~ dunif(0, 1000)
}
"

# Initialize parameters for the model
params <- c("mu", "sigma")

# Initialize the model
model <- jags.model(textConnection(model_string), data = data, inits = list(.RNG.name = "base::Mersenne-Twister", .RNG.seed = 42))

# Burn-in
update(model, 1000)

# Draw samples from the posterior distribution
samples <- coda.samples(model, variable.names = params, n.iter = 10000)

# Display summary of the samples
summary(samples)