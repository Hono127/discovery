class PostsController < ApplicationController


  # 下記はPostというDBからすべて(all)取ってくるという意味
  # @postsはインスタンス生成をしている
  def index
    @posts = Post.all
  end

  # 下記はPostというオブジェクトが作成される(titleとcontentを含んだオブジェクトが作成される)
  # 新しい掲示板のフォーム用のコントローラー設定
  # 定義した名前(ここでいう「new」)は/app/views/posts/「new」.html.erbのnewと名前を一致させる
  def new
    @posts = Post.new
  end
end
