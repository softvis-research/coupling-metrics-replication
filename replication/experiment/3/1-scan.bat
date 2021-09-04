REM rd jqassistant /s /q
set JQASSISTANT_OPTS=-Xmx4G
../../tools/jqassistant-commandline-neo4jv3-1.8.0/bin/jqassistant.cmd scan -f java:classpath::system/atlassian-jira/WEB-INF/classes/,system/,traces