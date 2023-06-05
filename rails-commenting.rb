# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController # a child class called BlogPostsController is created, inheriting from its parent ApplicationContoller
  def index
    # ---2)
    @posts = BlogPost.all # @posts is retriving all of records associated with BlogPost
  end

  # ---3)
  def show # a show method, this will display all the details in the blog post
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  def new # prepares for a new instance of BlogPost
    @post = BlogPost.new
  end

  def create 
    # ---5)
    @post = BlogPost.create(blog_post_params) # A new record is created using the blog_post_params parameters that were passed 
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    @post = BlogPost.find(params[:id]) #this is looking for a certain blog post which is retrived by its ID
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    @post.update(blog_post_params) #attributes updated based on the parameters
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      redirect_to blog_posts_path #after destruction the user is redirected to a page called blog posts eart
    end
  end

  # ---9)
  private #keeps information hidden and helps improve secruity and prevents hacking
  def blog_post_params
    # ---10)
    params.require(:blog_post).permit(:title, :content) # when a blog post is created or updated it must use the blog_post param, also must have title and content attributes.  Basically from what I can see this looks like it prevents empty spamming, the user must create a blog post that has a title and some content.  
  end
end
