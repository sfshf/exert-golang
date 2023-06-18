#!/usr/bin/env bash

# Before running subsequent scripts, please make sure that your target project was pushed to the gitlab repository.
# INSTRUCTION: "git push --mirror http(s)://GITLAB_HOST/YOUR_GROUP/YOUR_GIT_PROJECT.git"
# NOTE: if you just reset the system, you're not necessary to run the scripts.
set -eo pipefail

# Must input your project token.
if [ "$1" != "-t" ] ; then
  echo "Error: gitlab project token not found"
  exit 1
fi
if [ "$2" == "" ] ; then
  echo "Error: gitlab project token is empty"
  exit 1
fi

# global variables:
gitlab_hostname="repo.gitlab.cn"
gitlab_ip="172.168.1.3"

gitlab_runner_container_name="gitlab-runner-01"
gitlab_url="http://${gitlab_hostname}"
gitlab_runner_description=""
executor="docker"
docker_image="docker:20.10.10-alpine3.14"
docker_network="repo_net"
docker_pull_policy="never"

echo ">>> Register a specific runner for $2."
docker exec -it ${gitlab_runner_container_name} \
gitlab-runner register \
--run-untagged \
--url "${gitlab_url}" \
--registration-token "$2" \
--description "${gitlab_runner_description}" \
--executor "${executor}" \
--docker-image "${docker_image}" \
--docker-network-mode "${docker_network}" \
--docker-volumes "/var/run/docker.sock:/var/run/docker.sock" \
--docker-volumes "/cache" \
--docker-pull-policy "${docker_pull_policy}" \
--docker-extra-hosts "${gitlab_hostname}:${gitlab_ip}"