var webdriver = require('selenium-webdriver');
const assert = require('chai').assert;

By = webdriver.By;
until = webdriver.until;

var driver;

before(function(){
    this.timeout(15000);
  driver = new webdriver.Builder().
      withCapabilities(webdriver.Capabilities.chrome()).
      build();
  driver.get("https://rohitkumar199407.github.io/Devops/");
      });

    after(function(){
      driver.quit();
    });
describe( 'React App' , function(){

    it('John Smith', function() {
        driver.findElement(By.xpath("//p[contains(text(),'123456789')]/following-sibling::button")).click();
        driver.findElement(By.xpath("//body/div[@id='root']/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/p[4]")).getText().then(function(city) {
        assert.equal(city,'City : bangalore','city is bangalore');
      
        });
      });

      it('ABCD', function() {
        driver.findElement(By.xpath("//p[contains(text(),'123456789')]/following-sibling::button")).click();
        driver.findElement(By.xpath("//body/div[@id='root']/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/p[4]")).getText().then(function(city) {
        assert.equal(city,'City : mangalore','city is mangalore');
      
        });
      });

      it('Tyrion', function() {
        driver.findElement(By.xpath("//p[contains(text(),'123412345')]/following-sibling::button")).click();
        driver.findElement(By.xpath("//body/div[@id='root']/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/p[4]")).getText().then(function(city) {
        assert.equal(city,'City : chennai','city is chennai');
      
        });
      });

    });