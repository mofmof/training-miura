Sentry.init do |config|
  config.dsn = 'https://df7d9b4790964fa6ae0b92525025fe62@o4503939819700224.ingest.sentry.io/4503941133303808'
  config.breadcrumbs_logger = %i[active_support_logger http_logger]

  # To activate performance monitoring, set one of these options.
  # We recommend adjusting the value in production:
  config.traces_sample_rate = 1.0
  # or
  config.traces_sampler = lambda do |_context|
    true
  end
end
