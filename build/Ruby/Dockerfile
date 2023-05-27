FROM ruby:3.2.2

WORKDIR /usr/src/app

COPY ./Gemfile ./Gemfile.lock ./

RUN gem update --system
RUN bundle install
# RUN bundle update --bundler

# Add a script to be executed every time the container starts.
COPY ./entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
# ENTRYPOINT ["/usr/bin/entrypoint.sh"]
# EXPOSE 3000

# Start the main process.
# CMD ["rails", "server", "-b", "0.0.0.0"]