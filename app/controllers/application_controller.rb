class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :feedjira_entries

private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end

  def feedjira_entries(source)
    feed_obj = Feedjira::Feed.fetch_and_parse(source.url)
    parsed_feed_entries = []
    feed_obj.entries.each do |entry|
      parsed_feed_entries << {
        title: entry.title,
        summary: entry.summary,
        image: set_image(entry),
        url: entry.url,
        author: entry.author,
        published: entry.published.to_s,
        feed: source
      }
    end
    parsed_feed_entries
  end


  def set_image(entry)

    image = nil
    if entry.image
      image = entry.image
    elsif parse_image(entry.summary)

      image = parse_image(entry.summary)
    elsif parse_image(entry.content)
      image = parse_image(entry.content)
    end
    image
  end

  def parse_image(image)
    suppress(Exception) do
     /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/.match(image)[1]
   end
  end
end
