from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from rest_framework.response import Response
#from django.http import Response
from .models import Article
from rest_framework import viewsets
from .serializers import ArticleSerializer
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView


import json


def home(request):
	context = {
		'articles': json.dumps(ArticleListViewSet().get_json_data()),
		'random_articles': json.dumps(ArticleRandomViewSet().get_json_data()),
		'article': {}
	}
	return render(request, 'home.html', context)

def detail(request):
	article_id = request.GET.get('article_id')
	context = {
		'article': json.dumps(ArticleViewSet().get_json_data(article_id)),
		'articles': json.dumps(ArticleListViewSet().get_json_data()),
		'show_json': request.GET.get('show_json', 0),
		'random_articles': json.dumps(ArticleRandomViewSet().get_json_data())
	}
	return render(request, 'detail.html', context)


class ArticleRandomViewSet(APIView):
	"""
	A view that returns the count of active users in JSON.
	"""
	renderer_classes = (JSONRenderer, )

	def get_json_data(self):
		queryset = Article.objects.raw('SELECT * FROM articles_article ORDER BY Random() LIMIT 4')
		serializer = ArticleSerializer(queryset, many=True)
		return serializer.data

	def get(self, request, format=None):
		return Response(self.get_json_data())

class ArticleListViewSet(APIView):
	"""
	A view that returns the count of active users in JSON.
	"""
	renderer_classes = (JSONRenderer, )

	def get_json_data(self):
		queryset = Article.objects.order_by('published_date')
		serializer = ArticleSerializer(queryset, many=True)
		return serializer.data

	def get(self, request, format=None):
		return Response(self.get_json_data())

class ArticleViewSet(APIView):
	"""
	A view that returns the count of active users in JSON.
	"""
	renderer_classes = (JSONRenderer, )

	def get_json_data(self, article_id):
		queryset = Article.objects.get(article_id=article_id)
		serializer = ArticleSerializer(queryset)
		return serializer.data

	def get(self, request, format=None):
		article_id = request.GET.get('article_id')
		return Response(self.get_json_data(article_id))

class ArticleSearchViewSet(APIView):
	"""
	A view that returns the count of active users in JSON.
	"""
	renderer_classes = (JSONRenderer, )

	def get(self, request, format=None):
		article_title = request.GET.get('q')
		queryset = Article.objects.raw('SELECT * FROM articles_article where title LIKE %s', ['%%' + article_title + '%%'])
		serializer = ArticleSerializer(queryset, many=True)
		return Response(serializer.data)




