module SocketControllers
  class BallController < WebsocketRails::BaseController
    def select
      send_message 'ball.click', message
    end

  end
end
