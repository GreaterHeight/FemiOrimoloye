(function(){
 const form=document.querySelector('[data-contact-form]'); if(!form)return;
 const params=new URLSearchParams(location.search); const typeField=form.querySelector('[name="type"]'); if(params.get('type')==='speaking'&&typeField) typeField.value='Speaking';
 const status=form.querySelector('.form-status');
 form.addEventListener('submit',function(e){e.preventDefault();
  const trap=form.querySelector('[name="website"]'); if(trap&&trap.value){status.textContent='Your message could not be submitted.';status.className='form-status error';return;}
  const required=[...form.querySelectorAll('[required]')]; let ok=true; required.forEach(f=>{f.removeAttribute('aria-invalid'); if(!f.checkValidity()){ok=false;f.setAttribute('aria-invalid','true')}});
  if(!ok){status.textContent='Please complete the required fields before submitting.';status.className='form-status error';const bad=required.find(f=>!f.checkValidity());if(bad)bad.focus();return;}
  const data=new FormData(form); const subject=encodeURIComponent('Website enquiry from '+data.get('name')); const body=encodeURIComponent('Name: '+data.get('name')+'\nEmail: '+data.get('email')+'\nOrganisation: '+data.get('organisation')+'\nEnquiry type: '+data.get('type')+'\n\nMessage:\n'+data.get('message'));
  // No personal email address was supplied in the source materials. Do not invent one.
  // We therefore provide a safe client-side fallback that copies the message for manual routing.
  navigator.clipboard?.writeText(decodeURIComponent(body)).catch(()=>{});
  status.innerHTML='Your enquiry is ready. The message has been copied where browser permissions allow. <strong>Because a verified recipient address has not been supplied, please use the LinkedIn contact link below to send it.</strong>';
  status.className='form-status success';
 });
})();
