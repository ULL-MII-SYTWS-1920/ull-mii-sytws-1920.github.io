desc "Publicar en GitHub los apuntes de PL"
task :default do
  sh "git ci -am 2020 && git push"
end

desc "bundle exec jekyll serve"
task :serve do
  sh "bundle exec jekyll serve --no-watch --incremental"
end

desc "sytws: bundle exec jekyll serve -H 10.6.128.216 -P 8080"
task :sytws do
  sh "git pull origin master"
  sh "bundle exec jekyll serve -H 10.6.128.216 -P 8080"
end

desc "sytws: build and run with jekyll"
task :buildj do
  sh "git pull origin master"
  sh "bundle exec jekyll build"
end

desc "sytws: build and run with static-server"
task :httpserver do
  sh "git pull origin master"
  sh "bundle exec jekyll build"
  sh "cd _site &&  http-server -p 8080 -a 10.6.128.216"
end

require 'html-proofer'
desc "test links in the build web site"
task :test do
  sh "bundle exec jekyll build"
  options = { 
    :assume_extension => true, 
    :disable_external => true, 
    :empty_alt_ignore => true 
  }
  HTMLProofer.check_directory("./_site", options).run
end
