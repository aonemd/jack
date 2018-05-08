require "rubygems"
require "bundler/setup"
require "jekyll"

task default: %[serve]

desc "Serve All: Run Jekyll server with webpack build"
task :serve do
  exec "bundle exec foreman start -c"
end

desc "Build All: Build Jekyll blog with assets"
task :build do
  system "yarn run build"
  system "bundle exec jekyll build"
end
