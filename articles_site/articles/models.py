from django.db import models
from django.utils.encoding import python_2_unicode_compatible

import uuid
	
@python_2_unicode_compatible
class Article(models.Model):
	title = models.CharField(max_length=200)
	published_date = models.DateTimeField('date published')
	content = models.CharField(max_length=10000)
	hero_image = models.CharField(max_length=200)
	support_image = models.CharField(max_length=200)
	category = models.CharField(max_length=100)
	author = models.CharField(max_length=200)
	article_id = models.CharField(max_length=100, blank=True, unique=True, default=uuid.uuid4)

	def __str__(self):
		return self.title
