### Install Docker

Follow instructions in Docker docs for your OS. Here, we'll outline the steps for installing Docker on [CentOS](https://docs.docker.com/install/linux/docker-ce/centos/).

1. Ensure necessary utils are installed.

```bash
$ sudo yum install -y yum-utils device-mapper-persistent-data lvm2
```

2. Add Docker repo.

```bash
$ sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

3. Install Docker.

```bash
$ sudo yum install docker-ce
```

4. Start Docker.

```bash
$ sudo systemctl start docker
```

5. Verify everything is working as expected.

```bash
$ sudo docker run hello-world
```

The above command should show something like the following.

```bash
$ sudo docker run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/

```

### Docker Post-Installation Steps

1. It makes for a better experience to not have to precede every Docker command with `sudo`, so we can make a user a member of the `docker` group to eliminate the need for that.

There is likely already a `docker` group, but check this by attempting to create one.

```bash
$ sudo groupadd docker
```

Add yourself to the `docker` group.

```bash
$ sudo usermod -aG docker $USER
```

Now log out and back in or execute `source ~/.bashrc` and you should be able to execute `docker run hello-world` with no permission errors thrown your way.

2. It's nice for Docker start automatically when the system reboots, which we can accomplish with the following command.

3. For more post-install options, check out [https://docs.docker.com/install/linux/linux-postinstall/](https://docs.docker.com/install/linux/linux-postinstall/).

```bash
sudo systemctl enable docker
```

### Install Docker Compose

These steps were pulled right from the [Docker documentation](https://docs.docker.com/compose/install/).

1. Install Docker Compose.

First, you may want to check the current release and replace the `1.23.2` in the command below if necessary.

```bash
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

2. Make it executable.

Next, set the permissions to make the binary executable:

```bash
$ sudo chmod +x /usr/local/bin/docker-compose
```

3. Verify it's working as expected.

Then, verify that the installation was successful by checking the version:

```bash
$ docker-compose --version
```

This will print out the version you installed:

```bash
docker-compose version 1.23.2, build 1110ad01
```