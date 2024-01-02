# sample用
class SamplesController < ApplicationController
  def index
    # @samples = SampleModel.all
  end

  def show
    @sample = SampleModel.find(params[:id])
  end

  def new
    @sample = SampleModel.new
  end

  def create
    @sample = SampleModel.new(sample_params)
    if @sample.save
      redirect_to @sample
    else
      render :new
    end
  end

  def edit
    @sample = SampleModel.find(params[:id])
  end

  def update
    @sample = SampleModel.find(params[:id])
    if @sample.update(sample_params)
      redirect_to @sample
    else
      render :edit
    end
  end

  def destroy
    @sample = SampleModel.find(params[:id])
    @sample.destroy
    redirect_to samples_path
  end

  private

  def sample_params
    params.require(:sample_model).permit(:name, :description)
  end
end
