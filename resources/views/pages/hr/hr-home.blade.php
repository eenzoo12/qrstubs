@extends('layouts.app')

@section('js')
    <script src="{{ asset('js\hr.js') }}" defer></script>
@endsection

@section('content')
<body class="body">
<div class="container1">
    <div class="card text-middle">
        <div class="card-header">
            <div class="row" style="margin: 20px 0px;">
                <div class="col-md-4">
                    <h1 class="wiggle">
                        <button style="width:150px; height:40px;" class="btn btn-success" data-toggle="modal" data-target="#regModal">REGISTER</button>
                    </h1>
                </div>
                <div class="col-md-3">
                    <h1 style="text-align:center;"> HR </h1>    
                </div> <div class="col-md-2"></div>
                <div class="col-md-3">
                    <form id="searchNForm" method="POST">
                    {{ csrf_field() }}                        
                        <div class="input-group">
                            <input type="search" class="form-control" name="searchtxt"
                                placeholder="Search name here.." > <span class="input-group-btn"></span>
                            <button type="submit" id="sn-search-button" style="
                            height: calc(1.6em + 0.75rem + 2px);">Go</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
        <div class="card-body">
            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#allemp-tab" role="tab">Employees</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="allemp-tab" role="tabpanel">
                    @include('pages.hr.empTab')
                </div>
            </div>
        </div>
        {{-- Register Modal--}}
        <div class="modal modal-primary fade" id="regModal" tabindex="-1" data-backdrop="false" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 style="margin-left:0.83em; margin-top:0.3em; font-size: 1.5em; font-weight: bold;">Register Account</h5>
                            <button type="button" name="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form id="addUserForm"  method="POST" action="{{ url('registerUser') }}">
                            @csrf
                        <div class="modal-body">
                            @include('includes.regform') 
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" id="registerBtn" class="btn btn-primary">Save Data</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>             
            {{-- End of Registration --}}
    </div>
</div>
</body>

<footer style="position:absolute; width:100%;">
    @include('includes.footer')
</footer>


@endsection

