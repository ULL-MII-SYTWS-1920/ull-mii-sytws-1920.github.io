# Descripción de la Práctica p2-t1-vscode

1. Instale VSCode en su máquina
2. Siga los tutoriales de VSCode
2. Instale el plugin SHH FS y aprenda a usarlo con el sistema de archivo de una máquina remota via SSH
3. Use Live Share para colaborar con un compañero
4. Elabore un informe con la experiencia adquirida

- Collaboration
    - [Introducing Visual Studio Live Share](https://code.visualstudio.com/blogs/2017/11/15/live-share)
    - <a href="https://youtu.be/fWXe1HQ1wVA" target="_blank">Vídeo Visual Studio Live Share Demo on VS Code</a>
- Editando con VSCode en la máquina iaas.ull.es
    - Use un plugin para Visual Studio Code que permita montar un sistema de archivos sobre SSH
      - [SSH FS: File system provider using SSH](https://marketplace.visualstudio.com/items?itemName=Kelvin.vscode-sshfs)
      - [SSHExtension](https://marketplace.visualstudio.com/items?itemName=kondratiev.sshextension) This extension allows you to open an SSH connection in the integrated terminal. The extension was created in order to have access to the SSH in conjunction with the already available access to the FTP.
      - [Remote FS](https://marketplace.visualstudio.com/items?itemName=liximomo.remotefs)
- Settings file locations
  - Depending on your platform, the user settings file is located here:
    - Windows %APPDATA%\Code\User\settings.json
    - macOS $HOME/Library/ApplicationSupport/Code/User/settings.json
    - Linux $HOME/.config/Code/User/settings.json
    - The workspace setting file is located under the .vscode folder in your root folder.