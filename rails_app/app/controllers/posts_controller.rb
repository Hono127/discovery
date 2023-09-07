class PostsController < ApplicationController


  # 下記はPostというDBからすべて(all)取ってくるという意味
  # @postsはインスタンス生成をしている
  def index
    @posts = Post.all
  end

  # 下記はPostというオブジェクトが作成される(titleとcontentを含んだオブジェクトが作成される)
  # 新しい掲示板のフォーム用のコントローラー設定
  # 定義した名前(ここでいうdef直後の「new」)は/app/views/posts/new.html.erbのnewと名前を一致させる
  def new
    @post = Post.new
  end

  # 下記とすることでtitleとcontentに打ち込まれたものがpost_paramsに格納される
  def create
    @post =Post.new(post_params)
    if @post.save
      redirect_to posts_path
    else
      render :new
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to posts_path
    else
      render :edit
    end
  end

# privateをつけることでその下にdefされたメソッドはこのファイルでしか呼び出せなくなる！（厳格モードみたいな？）
  private
  def post_params
    params.require(:post).permit(:title, :content)
  end
end
