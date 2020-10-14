# Descripción de la Práctica p01-t1-iaas

* Siguiendo las instrucciones en el  [repositorio SYTW/iaas-ull-es](https://github.com/SYTW/iaas-ull-es) despliegue un ejemplo como el que aparece en [crguezl/express-start](https://github.com/crguezl/express-start) en su máquina virtual del servicio [iaas.ull.es](iaas.ull.es).
* Puede encontrar un vídeo del profesor introduciendo el [iaas.ull.es aquí](https://youtu.be/qKHgbV0lYbA).
    - [![iaas.ull.es](http://i3.ytimg.com/vi/qKHgbV0lYbA/hqdefault.jpg)](https://youtu.be/qKHgbV0lYbA)
    - El vídeo es de 2018 y varias de las apps usadas han cambiado de versión pero la esencia de la metodología es la misma 
* Añada en el `README.md` un pequeño tutorial de como usar y desplegar una aplicación web en [iaas.ull.es](iaas.ull.es).
  - Haga capturas de pantalla que muestren que su máquina esta bien configurada y funcionando
* La IP dinámica de su máquina virtual no debería cambiar si no la apaga. Publique la URL de despliegue en su máquina
* Prepare la máquina para poder trabajar:
  - Instale [linuxbrew](http://linuxbrew.sh/)
  - Instale git si es necesario
  - [Configura git](https://git-scm.com/book/es/v1/Empezando-Configurando-Git-por-primera-vez)
  - Procure que la rama actual aparezca en el prompt de la terminal. 
     - Ejemplo para una bash. Pon en el fichero `~/.bash_profile` o `~/.bashrc` estas líneas:

     ```
     parse_git_branch() {
       git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
     }
     export PS1="\u@\h \[\033[32m\]\w\[\033[33m\]\$(parse_git_branch)\[\033[00m\] $ "
     ```

     - También puede usar [git prompt](https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh)
     - Puede añadir algo como esto a su PS1: `PS1="\$(git branch 2>/dev/null | sed -n 's/* \(.*\)/\1 /p')$ "`
     - Recuerde que si su prompt es muy largo siempre puede acortarlo con `PROMPT_DIRTRIM=1`
  - [git aliases](https://git-scm.com/book/tr/v2/Git-Basics-Git-Aliases)
  - [Instale GitHub CLI](https://github.com/cli/cli) y aprenda a usarla
    - [manual](https://cli.github.com/manual/)
  - Instale [meta](https://github.com/mateodelnorte/meta)
    - meta is a tool for managing multi-project systems and libraries. It answers the conundrum of choosing between a mono repo or many repos by saying "both", with a meta repo!
    - meta is powered by plugins that wrap common commands, letting you execute them against some or all of the repos in your solution at once. meta is built on [loop](https://github.com/mateodelnorte/loop), and as such inherits loops ability to easily target a particular set of directories for executing a common command (eg `meta git status --include-only dir1,dir2`. See [loop](https://github.com/mateodelnorte/loop) for more available options). 
  - Instale [nvm](https://github.com/creationix/nvm)
  - Instale nodeJS usando nvm
  - [jshint](http://jshint.com/install/) y [jshint on vim](https://coderwall.com/p/zfhquw/jshint-in-vim) o JSLint o [equivalente](https://www.slant.co/topics/2411/~best-javascript-linting-tools)
    - Instale [NERDTree](https://github.com/scrooloose/nerdtree) para vim
  - Instale Express.js
      - [Express Web Framework (Node.js/JavaScript)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs) (Mozilla)
  - Instale [rbenv](https://github.com/rbenv/rbenv) o [chruby](https://stevemarshall.com/journal/why-i-use-chruby/) o [rvm](https://github.com/rvm/ubuntu_rvm) o similar y alguna versión moderna de Ruby
* [Hágase miembro de la comunidad Google+ SYTWS](https://plus.google.com/u/1/communities/104629784252354892324)  (Asegúrate de estar identificado con tu cuenta de Gmail de la ULL)

### Software Obsoleto. 

- [Como instalar X11 en las máquinas de iaas.ull.es](https://youtu.be/m2y0gq35Ujc) Vídeo en Youtube. Esto es opcional. 
- [hub](https://github.com/github/hub). Obsoleto. No lo instale. Se usa [GitHub cli]((https://github.com/cli/cli))
- [ghi](https://github.com/stephencelis/ghi) Obsoleto. No lo instale.
- Instale [ctags](https://courses.cs.washington.edu/courses/cse451/10au/tutorials/tutorial_ctags.html)
- [ag](http://conqueringthecommandline.com/book/ack_ag) o [ack](http://conqueringthecommandline.com/book/ack_ag)
- etc. 
  
### GitHub Classroom: Outside Colaborators and members

* Una vez acepte la tarea en GitHub Classroom, pasará a ser *outside collaborator* de la organización de la asignatura,
* En algun momento, el profesor le hará una invitación a ser miembro de pleno derecho de la organización
    - [Acepte la invitacion del profesor a pertenecer a la organización Github de la asignatura visitando la página de la organización](https://github.com/ULL-MII-SYTWS-1920)
    - También recibirá un email con la invitación. Puede aceptar haciendo click en el correspondiente enlace

### Formulario

Rellene el [formulario solicitado con la relación aluXX-GitHub](https://docs.google.com/forms/d/e/1FAIpQLSe3l-XOWurbsHbgtzv4giCNMF15TMwlxsP_2yMDXnDYMt71dw/viewform) si no lo ha hecho ya
