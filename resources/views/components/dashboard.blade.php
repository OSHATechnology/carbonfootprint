@extends('layouts.index')
@section('content')
<div class="pd-ltr-20">
    <div class="card-box pd-20 height-100-p mb-30">
        <div class="row align-items-center">
            <div class="col-md-4">
                <img src="{{asset('assets/vendors')}}/images/banner-img.png" alt="">
            </div>
            <div class="col-md-8">
                <h4 class="font-20 weight-500 mb-10 text-capitalize">
                    Welcome <div class="weight-600 font-30 text-red-50"></div>
                </h4>
                <p class="font-18 max-width-600">The following is the calculation of the Carbon Footprint for car production activities. Please input the date, total production output and total energy consumption (BTU)</p>
            </div>
        </div>
    </div>
</div>

@include('components.form')

<div class="pd-ltr-20">
    <div class="pd-20 card-box mb-30">
        <div class="clearfix mb-20">
            <div class="pull-left">
                <h4 class="text-red-50 h4">Data</h4>
            </div>
            
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Shop/Emission</th>
                    <th scope="col">Welding</th>
                    <th scope="col">Painting</th>
                    <th scope="col">Assy</th>
                    <th scope="col">Press</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Electricity</td>
                    <td>27,358.07 KWh</td>
                    <td>19,333.33 KWh</td>
                    <td>26,269.32 KWh</td>
                    <td>20,751.02 KWh</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Fuel</td>
                    <td>9,491.52 L</td>
                    <td>9,346.73 L</td>
                    <td>3,970.87 L</td>
                    <td>3,033.213 L</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Gas</td>
                    <td>105,56 Kg</td>
                    <td>124,3 Kg</td>
                    <td>129,17 Kg</td>
                    <td>65,28 Kg</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="row">
        <div class="col-md-12 col-sm-12 mb-30">
            <div class="card text-white bg-danger card-box">
                <div class="card-header">Carbon Footprint Calculation</div>
            </div>
        </div>
    </div>
    
     <div class="img-before-calculation">
          <div class="col-md-12 col-sm-12 mb-30">
               <div class="card text-white card-box">
                    <img src="/assets/src/images/img/people.svg" alt="">
               </div>
          </div>
     </div>

    <div class="result-calculation" style="display:none">
          <div class="row">
               <div class="col-xl-6 mb-30">
                    <div class="card-box height-100-p widget-style1">
                         <div class="d-flex flex-wrap align-items-center">
                              <div class="widget-data">
                              <div class="h4 mb-20">Production Time</div>
                              <div class="h5 font-14 production-time text-red-50" style="text-align:center"></div>
                              <div class="weigth-400 font-14" style="text-align:center"><small class="text-muted">TonsCO2e</small></div>
                              
                              </div>
                         </div>
                    </div>
               </div>
               <div class="col-xl-6 mb-30">
                    <div class="card-box height-100-p widget-style1">
                         <div class="d-flex flex-wrap align-items-center">
                              <div class="widget-data">
                              <div class="h4 mb-20">Total Emission (per cylinder block)</div>
                              <div class="h5 total-emission-cylinder-block text-red-50" style="text-align:center"></div>
                              <div class="weigth-400 font-14" style="text-align:center"><small class="text-muted">TonsCO2e</small></div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
    
          <div class="card-group mb-30">
               <div class="card card-box">
                    <div class="card-body">
                         <h5 class="card-title">Welding</h5>
                         <p class="card-text class-total-perproduk-welding"></p>
                         <p class="card-text total-emission-produk-welding"><small class="text-muted"></small></p>
                    </div>
               </div>
               <div class="card card-box">
                    <div class="card-body">
                         <h5 class="card-title">Painting</h5>
                         <p class="card-text class-total-perproduk-painting"></p>
                         <p class="card-text total-emission-produk-painting"><small class="text-muted"></small></p>
                    </div>
               </div>
               <div class="card card-box">
                    <div class="card-body">
                         <h5 class="card-title">Press</h5>
                         <p class="card-text class-total-perproduk-press"></p>
                         <p class="card-text total-emission-produk-press"><small class="text-muted"></small></p>
                    </div>
               </div>
               <div class="card card-box">
                    <div class="card-body">
                         <h5 class="card-title">Assy</h5>
                         <p class="card-text class-total-perproduk-assy"></p>
                         <p class="card-text total-emission-produk-assy"></p>
                    </div>
               </div>
          </div>

          <div class="row">
               <div class="col-md-6 mb-30">
                    <div class="card-box height-100-p pd-20">
                         <h2 class="h4 mb-20">Actual vs Target Emission</h2>
                         <div id="chartLoadTarget"></div>
                    </div>
               </div>    
               <div class="col-md-6 mb-30">
                    <div class="pd-20 card-box height-100-p">
                         <h4 class="h4">Emission Product Comparison</h4>
                         <div id="chart9"></div>
                    </div>
               </div>
          </div>
     </div>

    
    @include('components.footer')
</div>
@endsection