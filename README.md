# Experiences in Replicating an Experiment on Comparing Static and Dynamic Coupling Metrics

The replication of the experiment conducted by Schnoor and Hasselbring [Comparing Static and Dynamic Weighted Software Coupling Metrics](https://www.mdpi.com/2073-431X/9/2/24) can either be executed online or locally.

## Online Replication (experiment 4)

Click on the badge to access the replication study online.

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/softvis-research/coupling-metrics-replication/HEAD?filepath=%2Fjupyter%2F)

## Local Replication (experiments 1, 2, 3, 4)

1. Download and unzip or clone this repository.
2. Download the kieker monitoring logs and copy them into the corresponding folders but keep the existing `kieker.map` files.
* [Experiment 1](https://doi.org/10.5281/zenodo.3648094) -> `/replication/experiment/1/traces`
* [Experiment 2](https://doi.org/10.5281/zenodo.3648228) -> `/replication/experiment/2/traces`
* [Experiment 3](https://doi.org/10.5281/zenodo.3648240) -> `/replication/experiment/3/traces`
* [Experiment 4](https://doi.org/10.5281/zenodo.3648269) -> `/replication/experiment/4/traces`
4. Download the Jira byte code and extract the archives into the corresponding folders.
* [Jira byte code v7.3.0](https://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-software-7.3.0.tar.gz) -> `/replication/experiment/1/system`
* [Jira byte code v7.4.3](https://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-software-7.4.3.tar.gz) -> `/replication/experiment/2/system`
* [Jira byte code v7.7.1](https://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-software-7.7.1.tar.gz) -> `/replication/experiment/3/system`
* [Jira byte code v7.7.1](https://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-software-7.7.1.tar.gz) -> `/replication/experiment/4/system`  
6. Execute the batch files `1-scan.bat` and `2-aggregate-calls.bat` for each experiment one after another.
7. Execute `3-start-neo4j-server.bat` and explore the created dependency graphs at http://localhost:7474/.
8. Before you can execute the jupyter notebook `/jupyter/Replication of Comparing Coupling Metrics.ipynb`, you have to set up a corresponding environment. You can for example download [Anaconda](https://www.anaconda.com/products/individual) and install it. Furthermore, make sure that `jupyter notebook`, `pandas`, and `py2neo` are installed in the environment.


