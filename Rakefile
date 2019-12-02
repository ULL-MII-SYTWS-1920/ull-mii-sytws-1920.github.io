desc "Publicar en GitHub los apuntes de PL"
task :default do
  sh "git ci -am 2020 && git push"
end

desc "bundle exec jekyll serve --watch --incremental"
task :serve do
  sh "bundle exec jekyll serve --watch --incremental --port 8080 --host 10.6.128.216"
end

desc "sytws: pull and bundle exec jekyll serve -H 10.6.128.216 -P 8080"
task :pjs do
  sh "git pull origin master"
  sh "bundle exec jekyll serve -H 10.6.128.216 -P 8080"
end

desc "build"
task :b do
  sh "bundle exec jekyll build"
end


desc "sytws: pull and build"
task :pb do
  sh "git pull origin master"
  sh "bundle exec jekyll build"
end

desc "sytws: pull and build and run with static-server"
task :pbss do
  sh "git pull origin master"
  sh "bundle exec jekyll build"
  sh "cd _site &&  http-server -p 8080 -a 10.6.128.216"
end

desc "sytws: build and run with http-server -p 8080 -a 10.6.128.216"
task :bss do
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
