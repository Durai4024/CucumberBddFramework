package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page()
	{

		System.setProperty("webdriver.chrome.driver","D:/Durai V/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.freecrm.com/index.html");
	}

	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM()
	{
	   String title = driver.getTitle();
	   Assert.assertEquals(title, "#1 Free CRM for Any Business: Online Customer Relationship Software");
	}

	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username,String password) 
	{
	    driver.findElement(By.name("username")).sendKeys(username);
	    driver.findElement(By.name("password")).sendKeys(password);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button()
	{
		WebElement loginBtn =driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", loginBtn);
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() 
	{
	    String title = driver.getTitle();
	    Assert.assertEquals(title, "CRMPRO");
	}
	
	@Then("^user clicks on new contacts$")
	public void user_clicks_on_new_contacts() throws InterruptedException {
		  driver.switchTo().frame("mainpanel");
		  Actions action = new Actions(driver);
		  action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
		  driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
	}
	
	@Then("^user enters contact details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
	public void user_enters_contact_details(String firstname, String lastname, String company) {
		 
		  driver.findElement(By.id("first_name")).sendKeys(firstname);
	      driver.findElement(By.id("surname")).sendKeys(lastname);
	      driver.findElement(By.name("client_lookup")).sendKeys(company);
	 
	   }
	
	@Then("^user clicks on save button$")
	public void user_clicks_on_save_button() {
		driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	}
	
	@Then("^close the browser$")
	public void close_the_browser(){
	    driver.quit();
	}

}
