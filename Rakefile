desc "Publicar en GitHub los apuntes de PL"
task :default do # trabajamos en la rama curso2021
  sh "git ci -am '2020-2021' && git push -u origin curso2021:master"
end

desc "sytws: bundle exec jekyll serve --watch"
task :serve do
  sh "bundle exec jekyll serve --future --watch --port 8080 --host 0.0.0.0"
end

desc "local: bundle exec jekyll serve --watch"
task :ls do
  sh "bundle exec jekyll serve --host 0.0.0.0 --future --watch --port 8080"
end

desc "local serve drafts: bundle exec jekyll serve  --drafts --watch --incremental"
task :lsd do 
  sh "bundle exec jekyll serve --future --drafts --watch --incremental --port 8080"
end

desc "local: pull and bundle exec jekyll serve --watch --incremental"
task :pls do
  sh "git pull origin masqter"
  sh "bundle exec jekyll serve --future --watch --incremental --port 8080"
end

desc "sytws: pull and bundle exec jekyll serve -H 10.6.128.216 -P 8080"
task :pjs do
  sh "git pull origin master"
  sh "bundle exec jekyll serve --future -H 10.6.128.216 -P 8080"
end

desc "build"
task :b do
  sh "bundle exec jekyll build --future -I -w -d ../website"
end

task :pushhtml do
  "./scripts/build-and-push.sh"
end

desc "sytws: pull and build"
task :pb do
  sh "git pull origin master"
  sh "bundle exec jekyll build --future"
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
