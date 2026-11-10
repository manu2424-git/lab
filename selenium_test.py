from selenium import webdriver
from selenium.webdriver.common.by import By
import time
driver=webdriver.chrome()
driver.get("https://www.google.com")
print("page title:",driver.title)
search_box = driver.find_element(By.NAME,"q")
search_box.send_keys("selenium automated testing")
search_box.submit()
time.sleep(3)
print("search completed successfully")
driver.quit()


