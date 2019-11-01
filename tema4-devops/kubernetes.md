# Kubernetes

## Instalar VirtualBox

```
$ brew cask install virtualbox
```

## Instalar minikube

Minikube is a tool that makes it easy to run Kubernetes locally. Minikube runs a single-node Kubernetes cluster inside a Virtual Machine (VM) on your laptop for users looking to try out Kubernetes or develop with it day-to-day.

```
$ brew install minikube
Updating Homebrew...
==> Downloading https://homebrew.bintray.com/bottles/minikube-1.5.2.high_sierra.bottle.tar.gz
==> Downloading from https://akamai.bintray.com/5c/5c5d913c4cd18463ab10384d35fc59624e678874d8219cbc5af3b88a17eb89d8?__gda__=exp=15
######################################################################## 100.0%
==> Pouring minikube-1.5.2.high_sierra.bottle.tar.gz
==> Caveats
Bash completion has been installed to:
  /usr/local/etc/bash_completion.d

zsh completions have been installed to:
  /usr/local/share/zsh/site-functions
==> Summary
🍺  /usr/local/Cellar/minikube/1.5.2: 8 files, 51.5MB
$ minikube start
😄  minikube v1.5.2 on Darwin 10.13.6
✨  Automatically selected the '' driver
💣  Unable to determine a default driver to use. Try specifying --vm-driver, or see https://minikube.sigs.k8s.io/docs/start/
```

## minikube help

```
$ minikube help
Minikube is a CLI tool that provisions and manages single-node Kubernetes clusters optimized for development workflows.

Basic Commands:
  start          Starts a local kubernetes cluster
  status         Gets the status of a local kubernetes cluster
  stop           Stops a running local kubernetes cluster
  delete         Deletes a local kubernetes cluster
  dashboard      Access the kubernetes dashboard running within the minikube cluster

Images Commands:
  docker-env     Sets up docker env variables; similar to '$(docker-machine env)'
  cache          Add or delete an image from the local cache.

Configuration and Management Commands:
  addons         Modify minikube's kubernetes addons
  config         Modify minikube config
  profile        Profile gets or sets the current minikube profile
  update-context Verify the IP address of the running cluster in kubeconfig.

Networking and Connectivity Commands:
  service        Gets the kubernetes URL(s) for the specified service in your local cluster
  tunnel         tunnel makes services of type LoadBalancer accessible on localhost

Advanced Commands:
  mount          Mounts the specified directory into minikube
  ssh            Log into or run a command on a machine with SSH; similar to 'docker-machine ssh'
  kubectl        Run kubectl

Troubleshooting Commands:
  ssh-key        Retrieve the ssh identity key path of the specified cluster
  ip             Retrieves the IP address of the running cluster
  logs           Gets the logs of the running instance, used for debugging minikube, not user code.
  update-check   Print current and latest version number
  version        Print the version of minikube

Other Commands:
  completion     Outputs minikube shell completion for the given shell (bash or zsh)

Use "minikube <command> --help" for more information about a given command.
```

## Configurar `vm-driver` para minikube

```
$ minikube help config
config modifies minikube config files using subcommands like "minikube config set vm-driver kvm"
Configurable fields: 

 * vm-driver
 * container-runtime
 * feature-gates
 * v
 * cpus
 * disk-size
 * host-only-cidr
 * memory
 * log_dir
 * kubernetes-version
 * iso-url
 * WantUpdateNotification
 * ReminderWaitPeriodInHours
 * WantReportError
 * WantReportErrorPrompt
 * WantKubectlDownloadMsg
 * WantNoneDriverWarning
 * profile
 * bootstrapper
 * ShowDriverDeprecationNotification
 * ShowBootstrapperDeprecationNotification
 * dashboard
 * addon-manager
 * default-storageclass
 * heapster
 * efk
 * ingress
 * insecure-registry
 * registry
 * registry-creds
 * freshpod
 * storage-provisioner
 * storage-provisioner-gluster
 * metrics-server
 * nvidia-driver-installer
 * nvidia-gpu-device-plugin
 * logviewer
 * gvisor
 * helm-tiller
 * ingress-dns
 * hyperv-virtual-switch
 * disable-driver-mounts
 * cache
 * embed-certs
 * native-ssh

Available Commands:
  get         Gets the value of PROPERTY_NAME from the minikube config file
  set         Sets an individual value in a minikube config file
  unset       unsets an individual value in a minikube config file
  view        Display values currently set in the minikube config file

Usage:
  minikube config SUBCOMMAND [flags] [options]

Use "minikube <command> --help" for more information about a given command.
Use "minikube config options" for a list of global command-line options (applies to all commands).
```

```
$ minikube config set vm-driver virtualbox
⚠️  These changes will take effect upon a minikube delete and then a minikube start
```

## Start Minikube and create a cluster

```
$ minikube start
😄  minikube v1.5.2 on Darwin 10.13.6
🔥  Creating virtualbox VM (CPUs=2, Memory=2000MB, Disk=20000MB) ...
🐳  Preparing Kubernetes v1.16.2 on Docker '18.09.9' ...
💾  Downloading kubeadm v1.16.2
💾  Downloading kubelet v1.16.2
🚜  Pulling images ...
🚀  Launching Kubernetes ... 
⌛  Waiting for: apiserver
🏄  Done! kubectl is now configured to use "minikube"
```

## kubectl api-versions

$ kubectl api-versions
admissionregistration.k8s.io/v1
admissionregistration.k8s.io/v1beta1
apiextensions.k8s.io/v1
apiextensions.k8s.io/v1beta1
apiregistration.k8s.io/v1
apiregistration.k8s.io/v1beta1
apps/v1
authentication.k8s.io/v1
authentication.k8s.io/v1beta1
authorization.k8s.io/v1
authorization.k8s.io/v1beta1
autoscaling/v1
autoscaling/v2beta1
autoscaling/v2beta2
batch/v1
batch/v1beta1
certificates.k8s.io/v1beta1
coordination.k8s.io/v1
coordination.k8s.io/v1beta1
events.k8s.io/v1beta1
extensions/v1beta1
networking.k8s.io/v1
networking.k8s.io/v1beta1
node.k8s.io/v1beta1
policy/v1beta1
rbac.authorization.k8s.io/v1
rbac.authorization.k8s.io/v1beta1
scheduling.k8s.io/v1
scheduling.k8s.io/v1beta1
storage.k8s.io/v1
storage.k8s.io/v1beta1
v1


## Referencias

* [How to Install Kubernetes on Mac](https://matthewpalmer.net/kubernetes-app-developer/articles/guide-install-kubernetes-mac.html) from the Kubernetes for Application Developers Book
* [Installing Kubernetes with Minikube](https://kubernetes.io/docs/setup/learning-environment/minikube/#starting-a-cluster)
* [Instalar y Configurar kubectl](https://kubernetes.io/es/docs/tasks/tools/install-kubectl/#antes-de-empezar)
