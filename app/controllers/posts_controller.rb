class PostsController < ApplicationController
	def index
		@posts = [Post.new(id: 1, title: 'Post #1', description: 'Hello from Angular!')]
		# render json: [post.to_json]
	end
end
