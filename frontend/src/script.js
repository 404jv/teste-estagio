const naversContainer = document.getElementById('navers');

fetch('https://my-json-server.typicode.com/naveteam/fake-api/navers')
  .then(res => res.json())
  .then(navers => {
      navers.map((naver) => {
        const naverDiv = document.createElement('div');
        naverDiv.className = 'naver';

        const img_url = document.createElement('img');
        img_url.className = 'avatar';
        img_url.src = naver.image_url;

        const name = document.createElement('p');
        name.className = 'name';
        name.innerHTML = naver.name;

        const job_role = document.createElement('p');
        job_role.className = 'job';
        job_role.innerHTML = naver.job_role;

        naverDiv.appendChild(img_url);
        naverDiv.appendChild(name);
        naverDiv.appendChild(job_role);
        naversContainer.appendChild(naverDiv);
      });
  });
