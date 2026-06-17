FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    git curl wget unzip zip rsync \
    openjdk-17-jdk python3 \
    build-essential bc bison flex \
    g++-multilib gcc-multilib \
    lib32z1-dev libssl-dev \
    repo adb fastboot

WORKDIR /workspace

CMD ["/bin/bash"]