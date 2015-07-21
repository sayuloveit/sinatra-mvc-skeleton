get '/' do
  erb :welcome
end

get '/ajax_practice' do
  erb :login, layout: false
end

post '/login' do

end
