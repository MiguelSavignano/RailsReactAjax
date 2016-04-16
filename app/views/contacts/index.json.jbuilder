json.contacts!(@contacts) do |contact|
  json.extract! contact, :id, :name, :email, :phone, :avatar
  json.url contact_url(contact, format: :json)
end
