# GitHub Releases

GitHub Releases is a way to create a release to package software, along with release notes and links to binary files, for other people to use.

Releases are based on [Git tags](https://git-scm.com/book/en/Git-Basics-Tagging), which mark a specific point in your repository's history. A tag date may be different than a release date since they can be created at different times. For more information about viewing your existing tags, see "[Viewing your repository's releases and tags](https://help.github.com/en/github/administering-a-repository/viewing-your-repositorys-releases-and-tags).

Releases are ordered by a tag's date in the following way:

* If it's an <a href="https://git-scm.com/book/en/v2/Git-Basics-Tagging#_annotated_tags" target="_blank">annotated tag, the tag object's date is used</a>.
* If it's a <a href="https://git-scm.com/book/en/v2/Git-Basics-Tagging#_lightweight_tags" target="_blank">lightweight tag</a>, then the commit object's date is used.

## The release Event

A GitHub event with the name **release** is triggered when a release is 

* published, 
* unpublished, 
* created, 
* edited, 
* deleted, or 
* prereleased.

See [GitHub Webhooks](https://developer.github.com/webhooks/).

## Creating Releases Using the GitHub Web App

You can create releases on GitHub Web:

*   On GitHub, navigate to the main page of the repository.
*   Under your repository name, click **Releases**.
    
    ![Releases tab](https://help.github.com/assets/images/help/releases/release-link.png)
    
    https://help.github.com/assets/images/help/releases/release-link.png
*   Click **Draft a new release**.
    
    ![Releases draft button](https://help.github.com/assets/images/help/releases/draft_release_button.png)
    
*   Type a version number for your release. Versions are based on [Git tags](https://git-scm.com/book/en/Git-Basics-Tagging). We recommend naming tags that fit within [semantic versioning](http://semver.org/).
    
    ![Releases tagged version](https://help.github.com/assets/images/help/releases/releases-tag-version.png)
    
*   Use the drop-down menu to select the branch that contains the project you want to release.
    
    ![Releases tagged branch](https://help.github.com/assets/images/help/releases/releases-tag-branch.png)
    
*   Type a title and description for your release.
    
    ![Releases description](https://help.github.com/assets/images/help/releases/releases_description.png)
    
*   Optionally, to include binary files such as compiled programs in your release, drag and drop or manually select files in the binaries box.
    
    ![Providing a DMG with the Release](https://help.github.com/assets/images/help/releases/releases_adding_binary.gif)
    
*   To notify users that the release is not ready for production and may be unstable, select **This is a pre-release**.
    
    ![Checkbox to mark a release as prerelease](https://help.github.com/assets/images/help/releases/prerelease_checkbox.png)
    
*   If you're ready to publicize your release, click **Publish release**. To work on the release later, click **Save draft**.
    
    ![Publish release and Draft release buttons](https://help.github.com/assets/images/help/releases/release_buttons.png)

## References

* See more at [Managing releases in a repository](https://help.github.com/en/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)
* See also <a name="myfootnote1">1</a>: (Paragraph borrowed from [What exactly is a Release in GitHub?](https://stackoverflow.com/questions/33551505/what-exactly-is-a-release-in-github))
* See [GitHub Webhooks](https://developer.github.com/webhooks/).
