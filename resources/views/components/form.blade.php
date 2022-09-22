<div class="pd-ltr-20 xs-pd-20-10">
    <div class="min-height-200px">
        <div class="pd-20 card-box mb-30">
            <div class="clearfix mb-20">
                <div class="pull-left">
                    <h4 class="text-red-50 h4">Input</h4>
                </div>
                <div class="pull-right">
                    <a href="#basic-table" class="btn btn-danger btn-sm scroll-click reset" rel="content-y" data-toggle="collapse" role="button"><i class="icon-copy fa fa-refresh" aria-hidden="true"></i> Refresh</a>

                </div>
            </div>
            <form id="form-input">
                <div class="row">
                    <div class=" col-md-6 col-sm-12">
                        <div class="form-group">
                            <label>Plants</label>
                            <select class="custom-select2 form-control name-of-plants" name="state" style="width: 100%; height: 38px;">
                                <optgroup label="Select Plants">
                                    <option value="AK">Plants 1</option>
                                    <option value="HI">Plants 2</option>
                                </optgroup>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Date</label>
                            <input class="form-control date-picker name-of-working-days" id="name-of-working-days" placeholder="Select Date" type="text">
                        </div>
                    </div>                        
                    <div class=" col-md-6 col-sm-12">
                        <div class="form-group">
                            <label>Total Energy Consumption</label>
                            <input class="form-control name-of-consumption-energy" placeholder="Input Number" type="number">
                        </div>
                        <div class="form-group">
                            <label>Total Production Output</label>
                            <input class="form-control name-of-total-production-output" placeholder="Input Number" type="number">
                        </div>
                    </div>
                </div>
            </form>

            <div class="row">
                <div class="col-md-12">
                    <a href="#basic-table" class="btn btn-danger btn-calculate" type="button" style="width:100%"> <i class="icon-copy fa fa-calculator" aria-hidden="true"></i> Calculate</a>
                </div>
            </div>
        </div>
    </div>
</div>