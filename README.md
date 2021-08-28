# Experiences in Replicating an Experiment on Comparing Static and Dynamic Coupling Metrics

The replication of the experiment conducted by Schnoor and Hasselbring [Comparing Static and Dynamic Weighted Software Coupling Metrics](https://www.mdpi.com/2073-431X/9/2/24) can either be executed online or locally.

## Online Replication 

Click on the badge to access the replication study online.

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/softvis-research/coupling-metrics-replication/HEAD?filepath=%2Fjupyter%2F)

## Local Replication

1. Download and unzip or clone this repository.
2. Download [Kieker monitoring log](https://doi.org/10.5281/zenodo.3648269) and copy all (2410) compressed binary files into the folder `/replication/experiment/4/traces` but keep the existing `kieker.map` file.
3. Download the [Jira bytecode v7.7.1](https://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-software-7.7.1.tar.gz) and extract the archive into the folder `/replication/experiment/4/system`.  
4. Execute the batch files `1-scan.bat` and `2-analyze-calls.bat` in the folder `/replication/experiment/4` one after another.
5. Execute `3-start-neo4j-server.bat` in the same folder and explore the created dependency graphs at http://localhost:7474/.
6. Before you can execute the jupyter notebook `/jupyter/Replication of Comparing Coupling Metrics.ipynb`, you have to set up a corresponding environment. You can for example download [Anaconda](https://www.anaconda.com/products/individual) and install it. Furthermore, make sure that `jupyter notebook`, `pandas`, and `py2neo` are installed in the environment.


