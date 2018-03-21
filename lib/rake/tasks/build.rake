require 'jekyll'

desc 'Build the site to `./public`'
task :build do
  Jekyll::PluginManager.require_from_bundler

  Jekyll::Commands::Build.process(
    config: 'jekyll.yml',
    profile: true,
    trace: true
  )
end
