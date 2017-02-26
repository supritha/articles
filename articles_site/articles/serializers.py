from .models import Article
from rest_framework import serializers


class ArticleSerializer(serializers.HyperlinkedModelSerializer):
	published_date = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")

	class Meta:
		model = Article
		fields = ('title', 'content', 'published_date', 'hero_image', 'support_image', 'author', 'article_id')

