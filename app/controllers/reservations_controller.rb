class ReservationsController < ApplicationController
skip_before_action :authenticate_user!, only: [ :new, :create ]

  def new
    @reservation = Reservation.new
  end

  def create
    @reservation = Reservation.new(params[:reservation])
    if @reservation.deliver
      flash.now[:error] = nil
    else
      flash.now[:error] = 'Cannot send message.'
      render :new
    end
  end

end
