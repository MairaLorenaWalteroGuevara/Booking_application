<?php

// This website help me to know how get the rows from the table with the Date bigger than today https://stackoverflow.com/questions/7683290/mysql-how-to-select-data-from-table-which-recorded-today

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "config/config.php";
  
  $postjson = json_decode(file_get_contents('php://input'), true);
  $today    = date('Y-m-d');

  
 if($postjson['aksi']=='booking'){

    $query = mysqli_query($mysqli, "INSERT INTO projects SET
      client_id = '$postjson[client_id]',
      client_fullname = '$postjson[client_fullname]',
      booking_date = '$postjson[booking_date]',
      booking_hour = '$postjson[booking_hour]',
      booking_option = '$postjson[booking_option]',
      comment = '$postjson[comment]'
    ");

      if($query) $result = json_encode(array('success'=>true));
        else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

      echo $result;

    } else if($postjson['aksi']=="getbookings"){
      $data = array();
      $query = mysqli_query($mysqli, "SELECT * FROM projects WHERE DATE(booking_date) >= DATE(NOW()) ORDER BY DATE(booking_date)");
  
      while($row = mysqli_fetch_array($query)){
  
        $data[] = array(
          'project_id' => $row['project_id'],
          'client_id' => $row['client_id'],
          'client_fullname' => $row['client_fullname'],
          'booking_date' => $row['booking_date'],
          'booking_hour' => $row['booking_hour'],
          'booking_option' => $row['booking_option'],
          'comment' => $row['comment'],
          'pro_status' => $row['pro_status'],
        );
      }
  
      if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
      else $result = json_encode(array('success'=>false));
  
      echo $result;
  
  } else if($postjson['aksi']=="getproject"){
    $data = array();
    $query = mysqli_query($mysqli, "SELECT * FROM projects WHERE client_id='$postjson[client_id]'");

    while($row = mysqli_fetch_array($query)){

      $data[] = array(
        'client_id' => $row['client_id'],
        'booking_date' => $row['booking_date'],
        'booking_hour' => $row['booking_hour'],
        'comment' => $row['comment'],
        'pro_status' => $row['pro_status'],

      );
    }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));

    echo $result;

}else if($postjson['aksi']=="register"){

    $password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "INSERT INTO master_user SET
      fullname = '$postjson[fullname]',
      u_email = '$postjson[u_email]',
      u_companyname = '$postjson[u_companyname]',
      u_address = '$postjson[u_address]',
      u_phone = '$postjson[u_phone]',
      username = '$postjson[username]',
      password = '$password',
      status   = 'y'
    ");

    if($query) $result = json_encode(array('success'=>true));
    else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

    echo $result;
  }
  
  elseif($postjson['aksi']=="login"){
    $password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "SELECT * FROM master_user WHERE username='$postjson[username]' AND password='$password'");
    $check = mysqli_num_rows($query);

    if($check>0){
      $data = mysqli_fetch_array($query);
      $datauser = array(
        'user_id' => $data['user_id'],
        'username' => $data['username'],
        'password' => $data['password'],
        'fullname' => $data['fullname']
      );

      if($data['status']=='y'){
        $result = json_encode(array('success'=>true, 'result'=>$datauser));
      }else{
        $result = json_encode(array('success'=>false, 'msg'=>'Account Inactive')); 
      }

    }else{
      $result = json_encode(array('success'=>false, 'msg'=>'Unregister Account'));
    }

    echo $result;
  }


  else if($postjson['aksi']=="invoice"){

    $query = mysqli_query($mysqli, "INSERT INTO invoice SET
      item = '$postjson[item]',
      creat_at = '$today'
      ");
  
      if($query) $result = json_encode(array('success'=>true));
        else $result = json_encode(array('success'=>false));
  
      echo $result;
  
    }
  elseif($postjson['aksi']=="registeradmin"){

    $password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "INSERT INTO master_admin SET
      adminame = '$postjson[adminame]',
      password = '$password',
      status   = 'y'
    ");

    if($query) $result = json_encode(array('success'=>true));
    else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

    echo $result;
  }
  elseif($postjson['aksi']=="company"){

    $query = mysqli_query($mysqli, "INSERT INTO company SET
      fullname = '$postjson[fullname]',
      company = '$postjson[company]',
      com_address = '$postjson[com_address]',
      com_phone = '$postjson[com_phone]'
    ");

      if($query) $result = json_encode(array('success'=>true));
        else $result = json_encode(array('success'=>false, 'msg'=>'error, please try again'));

      echo $result;

    }elseif($postjson['aksi']=='update'){
  	$query = mysqli_query($mysqli, "UPDATE projects SET 
  		comment='$postjson[comment]',
      pro_status='$postjson[pro_status]',
      employee='$postjson[employee]'
  		 WHERE client_id='$postjson[client_id]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }elseif($postjson['aksi']=='updatecompany'){
  	$query = mysqli_query($mysqli, "UPDATE company SET 
  		fullname = '$postjson[fullname]',
      company = '$postjson[company]',
      com_address = '$postjson[com_address]',
      com_phone = '$postjson[com_phone]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }elseif($postjson['aksi']=='updateclient'){
  	$query = mysqli_query($mysqli, "UPDATE master_user SET 
  		fullname='$postjson[fullname]',
      u_email='$postjson[u_email]',
      u_companyname='$postjson[u_companyname]',
      u_address='$postjson[u_address]',
  		u_phone='$postjson[u_phone]' WHERE user_id='$postjson[user_id]'");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }elseif($postjson['aksi']=='employee'){
  	$query = mysqli_query($mysqli, "INSERT INTO pro_employee SET 
      employee_id ='$postjson[employee_id]',
      project_id='$postjson[project_id]',
      employee_name='$postjson[employee_name]',
      appointment_date='$postjson[appointment_date]' 
      ");

  	if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  	else $result = json_encode(array('success'=>false, 'result'=>'error'));

  	echo $result;

  }else if($postjson['aksi']=="getprojects"){
    $data = array();
    $query = mysqli_query($mysqli, "SELECT * FROM projects ORDER BY client_id");

    while($row = mysqli_fetch_array($query)){

      $data[] = array(
        'project_id' => $row['project_id'],
        'client_id' => $row['client_id'],
        'client_fullname' => $row['client_fullname'],
        'booking_date' => $row['booking_date'],
        'booking_hour' => $row['booking_hour'],
        'booking_option' => $row['booking_option'],
        'comment' => $row['comment'],
        'pro_status' => $row['pro_status'],
        'employee'=> $row['employee'],
      );
    }

    if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
    else $result = json_encode(array('success'=>false));

    echo $result;

}else if($postjson['aksi']=="getemployee"){
  $data = array();
  $query = mysqli_query($mysqli, "SELECT * FROM pro_employee ORDER BY appointment_date");

  while($row = mysqli_fetch_array($query)){

    $data[] = array(
      'employee_id' => $row['employee_id'],
      'project_id' => $row['project_id'],
      'employee_name' => $row['employee_name'],
      'appointment_date' => $row['appointment_date'],
    );
  }

  if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  else $result = json_encode(array('success'=>false));

  echo $result;

}else if($postjson['aksi']=="getstaff"){
  $data = array();
  $query = mysqli_query($mysqli, "SELECT * FROM employee");

  while($row = mysqli_fetch_array($query)){

    $data[] = array(
      'employee_id' => $row['employee_id'],
      'name' => $row['name']
    );
  }

  if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  else $result = json_encode(array('success'=>false));

  echo $result;

}else if($postjson['aksi']=="getcompany"){
  $data = array();
  $query = mysqli_query($mysqli, "SELECT * FROM company ORDER BY company_id");

  while($row = mysqli_fetch_array($query)){

    $data[] = array(
      'fullname' => $row['fullname'],
      'company' => $row['company'],
      'com_address' => $row['com_address'],
      'com_phone' => $row['com_phone'],
    );
  }

  if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  else $result = json_encode(array('success'=>false));

  echo $result;

}else if($postjson['aksi']=="getclients"){
  $data = array();
  $query = mysqli_query($mysqli, "SELECT * FROM master_user ORDER BY user_id");

  while($row = mysqli_fetch_array($query)){

    $data[] = array(
      'user_id' => $row['user_id'],
      'fullname' => $row['fullname'],
      'u_email' => $row['u_email'],
      'u_companyname' => $row['u_companyname'],
      'u_address' => $row['u_address'],
      'u_phone' => $row['u_phone'],
    );
  }

  if($query) $result = json_encode(array('success'=>true, 'result'=>$data));
  else $result = json_encode(array('success'=>false));

  echo $result;

}elseif($postjson['aksi']=='delete'){
  $query = mysqli_query($mysqli, " DELETE FROM projects WHERE projects.client_id='$postjson[client_id]'");

  if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  else $result = json_encode(array('success'=>false, 'result'=>'error'));

  echo $result;

}elseif($postjson['aksi']=='delete'){
  $query = mysqli_query($mysqli, " DELETE FROM master_user WHERE user_id='$postjson[client_id]' ");

  if($query) $result = json_encode(array('success'=>true, 'result'=>'success'));
  else $result = json_encode(array('success'=>false, 'result'=>'error'));

  echo $result;

}
  elseif($postjson['aksi']=="loginadmin"){
    $password = md5($postjson['password']);
    $query = mysqli_query($mysqli, "SELECT * FROM master_admin WHERE adminame='$postjson[adminame]' AND password='$password'");
    $check = mysqli_num_rows($query);

    if($check>0){
      $data = mysqli_fetch_array($query);
      $datauser = array(
        'admin_id' => $data['admin_id'],
        'adminame' => $data['adminame'],
        'password' => $data['password']
      );

      if($data['status']=='y'){
        $result = json_encode(array('success'=>true, 'result'=>$datauser));
      }else{
        $result = json_encode(array('success'=>false, 'msg'=>'Account Inactive')); 
      }

    }else{
      $result = json_encode(array('success'=>false, 'msg'=>'Unregister Account'));
    }

    echo $result;
  }

  
  

  ?>