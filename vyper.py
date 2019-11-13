import urllib.request
import requests
import random
import bs4
import time
import re
import names

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from guerrillamail import GuerrillaMailSession

def addReferral(ip):
	option = webdriver.ChromeOptions()
	chrome_prefs = {}
	#option.add_argument('--proxy-server=%s' % PROXY)
	#option.experimental_options["prefs"] = chrome_prefs
	#chrome_prefs["profile.default_content_settings"] = {"images":2}
	#chrome_prefs["profile.managed_default_content_settings"] = {"images":2}
	try:
		session = GuerrillaMailSession()
		email = session.get_session_state()['email_address']
	except Exception as e:
		time.sleep(300)
		return

	driver = webdriver.Chrome(options=option)
	StartURL = "https://vy.tc/iUgPj13"
	driver.get(StartURL)

	try:
		element_present = EC.presence_of_element_located((By.ID, "loadingoverlay"))
		WebDriverWait(driver, 20).until(element_present)
	except TimeoutException:
		driver.quit()
		return

	#time.sleep(random.random() * 300)
	last_height = driver.execute_script("return document.body.scrollHeight")
	while True:
		driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
		time.sleep(0.1)
		new_height = driver.execute_script("return document.body.scrollHeight")
		if new_height == last_height:
			break
		last_height = new_height
	try:
		driver.execute_script('document.getElementsByName("Entries[full_name]")[0].value = "%s"' % names.get_full_name())
		driver.execute_script('document.getElementsByName("Entries[email]")[0].value = "%s"' % email)
		driver.execute_script('document.getElementsByName("terms_text")[0].checked = true')
		driver.execute_script('document.getElementsByName("Entries[registration_ip]")[0].value = "%s"' % ip)
		driver.execute_script('document.getElementById("regular-form").submit()')
		if(random.random() < 0.32):
			driver.execute_script('document.getElementsByName("marketing_text")[0].checked = true')
	except Exception as e:
		driver.quit()
		return


	is_found = False

	while (not is_found):
		time.sleep(2)
		try:
			mailList = session.get_email_list()
		except Exception as e:
			time.sleep(300)
			driver.quit()
			return
		for temp_mail in mailList:
			if(temp_mail.sender == "confirmation@vyper.io"):
				is_found = True
				try:
					body = session.get_email(temp_mail.guid).body
				except Exception as e:
					time.sleep(300)
					driver.quit()
					return
				confirmURL = re.findall('<a href="(.*)">Click here',body)[0]
				print(confirmURL)
	#time.sleep(30 * random.random())
	driver.set_page_load_timeout(3)
	try:
		driver.get(confirmURL)
		driver.quit()
	except TimeoutException as e:
		driver.quit()
	return
	#time.sleep(7 * random.random())

if __name__ == "__main__":
	f = open("proxies", "r")
	for proxy in range(0, 10000):
		randIp = "%i.%i.%i.%i" %  (random.randrange(92,221,1),
			random.randrange(32,255,1),
			random.randrange(1,255,1),
			random.randrange(52,182,1))
		print(randIp)
		addReferral(randIp)
		time.sleep(int(random.randrange(0,6600,1)/100))





	
