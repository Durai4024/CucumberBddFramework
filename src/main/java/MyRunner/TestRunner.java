package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "D:/Durai V/JAVA Program/CucumberBddFramework/src/main/java/Features/Contacts.feature",
			glue={"StepDefinitions"},
			format={"pretty","html:test-outout"},
			monochrome=true,
			strict=true,
		    dryRun=false
			
)
public class TestRunner {

}
