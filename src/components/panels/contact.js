export default `
  <div id="contact">
    <h1><i class="fa fa-address-book-o"></i><span>contact</span></h1>
    <div class="content">
      <h3 class="text-center">let me know what you think</h3>
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <form method="post" action="message">
            <div class='form-group'>
              <div class="col-md-6">
                <label><i class="fa fa-user"></i> name</label>
                <input name="subj" class="col-sm-12 form-control" type="text" placeholder="enter your name..."/>
              </div>
              <div class="col-md-6">
                <label><i class="fa fa-envelope"></i> email</label>
                <input name="email" class="col-sm-12 form-control" type="text" placeholder="enter your a subject..."/>
              </div>
              <div class="col-md-12">
                <label><i class="fa fa-map-pin"></i> subject</label>
                <input name="name" class="col-sm-12 form-control" type="text" placeholder="enter your a subject..."/>
              </div>
            </div>
            <div class="col-md-12">
              <label><i class="fa fa-commenting"></i> content</label>
              <textarea class="form-control" name="content" placeholder="type something..." value=""></textarea>
            </div>
            <br>
            <div class="card-buttons">
              <button><i class="fa fa-angle-double-right"></i><strong>send</strong></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>`;
