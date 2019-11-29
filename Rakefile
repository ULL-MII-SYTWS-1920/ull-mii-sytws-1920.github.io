desc "Publicar en GitHub los apuntes de PL"
task :default do
  sh "git ci -am 2020 && git push"
end

desc "bundle exec jekyll serve"
task :serve do
  sh "bundle exec jekyll serve --watch --incremental"
end

desc "sytws: pull and bundle exec jekyll serve -H 10.6.128.216 -P 8080"
task :sytws do
  sh "git pull origin master"
  sh "bundle exec jekyll serve -H 10.6.128.216 -P 8080"
end

desc "sytws: pull and build"
task :pbj do
  sh "git pull origin master"
  sh "bundle exec jekyll build"
end

desc "sytws: pull and build and run with static-server"
task :pbs do
  sh "git pull origin master"
  sh "bundle exec jekyll build"
  sh "cd _site &&  http-server -p 8080 -a 10.6.128.216"
end

desc "sytws: build and run with static-server"
task :bs do
  sh "bundle exec jekyll build"
  sh "cd _site &&  http-server -p 8080 -a 10.6.128.216"
end

require 'html-proofer'
desc "test links in the build web site"
task :test do
  sh "git pull origin master"
  sh "bundle exec jekyll build"
  options = { 
    :assume_extension => true, 
    :disable_external => true, 
    :empty_alt_ignore => true,
    :file_ignore => [ %r{categories} ]
  }
  HTMLProofer.check_directory("./_site", options).run
end
