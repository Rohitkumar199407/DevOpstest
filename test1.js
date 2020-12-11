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
  driver.get("https://decohere.herokuapp.com/planets");
      });

    after(function(){
       driver.quit();
    });
describe( 'Test Suite-newtours' , function(){

    it('calculates weights', function() {
        driver.findElement(By.id('wt')).sendKeys('12');
        driver.findElement(By.id('calculate')).click();
        
        });
      });
    
      it('provides no default weight', function() {
        driver.findElement(By.id('wt')).getText().then(function(weight) {
        assert.equal(weight,true,"Weight started with values");
        });
      });