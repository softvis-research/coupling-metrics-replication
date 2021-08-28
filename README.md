# Experiences in Replicating an Experiment on Comparing Static and Dynamic Coupling Metrics

The replication of the experiment conducted by Schnoor and Hasselbring [Comparing Static and Dynamic Weighted Software Coupling Metrics](https://www.mdpi.com/2073-431X/9/2/24) can either be executed online or locally.

## Online Replication 

Click on the badge to access the replication study online: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/softvis-research/coupling-metrics-replication/HEAD?filepath=%2Fjupyter%2F)

## Local Replication

Download and unzip or clone the repository and execute the three batch files `1-scan.bat`, `2-analyze-calls.bat`, and `3-start-neo4j-server.bat` in the folder `/replication/experiment/4` one after another. Then, you can explore the created dependency graphs at http://localhost:7474/.

Before you can execute the jupyter notebook `/jupyter/Replication of Comparing Coupling Metrics.ipynb` locally, you have to set up a corresponding environment. You can for example download [Anaconda](https://www.anaconda.com/products/individual) and install it. Furthermore, make sure that `jupyter notebook`, `pandas`, and `py2neo` are installed in the environment.

## Links to sources
* Kieker monitoring log of the fourth experiment -> `/replication/experiment/4/traces`: https://doi.org/10.5281/zenodo.3648269 
* Jira bytecode v7.7.1 -> `/replication/experiment/4/system`: https://www.atlassian.com/software/jira/downloads/binary/atlassian-jira-software-7.7.1.tar.gz 
* jQAssistant command line distribution v1.8.0 -> `/replication/tools`: https://search.maven.org/artifact/com.buschmais.jqassistant.cli/jqassistant-commandline-neo4jv3/1.8.0/jar
* jQA Kieker plugin v1.0.0 -> `/replication/tools/jqassistant-commandline-neo4jv3-1.8.0/plugins`: https://github.com/softvis-research/jqa-kieker-plugin


