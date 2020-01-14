const storeForm =document.getElementById('store-form');
const storeId =document.getElementById('store-id');
const storeAddress =document.getElementById('store-address');

//send post to API to add store to db

async function addStore(e) {
  e.preventDefault()

  const sendBody = {
    storeId: storeId.value,
    address: storeAddress.value
  }

  try {
    const res = await fetch('/api/v1/stores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(sendBody)
    })

    if (res.status === 400) {
      throw Error('Store already exist')
    }

    alert('Store added');
    //redirect
    window.location.href = '/index.html'

  } catch (error) {
    alert(error)
    return
  }
}

storeForm.addEventListener('submit', addStore);