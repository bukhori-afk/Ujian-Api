import React from 'react';
import axios from 'axios';
 
 
 
class News extends React.Component {
  state = {
    datas: [],
    isLoading: true,
    errors: null
  };
 
  Databerita() {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=id&apiKey=b5c26c36c4f7408abf1c9fb574689428'
      )
      .then(response =>
        response.data.articles.map(
          newsdata => ({
            name: `${newsdata.source.name}`,
            title: `${newsdata.title}`,
            description: `${newsdata.description}`,
            content: `${newsdata.content}`,
            image: `${newsdata.urlToImage}`,
            create: `${newsdata.publishedAt}`,
            url: `${newsdata.url}`
          })
         
        )
      )
 
      .then(datas => {
        this.setState(
          {
            datas,
            isLoading: false
          },
          console.log(datas)
        );
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
 
 
 
  componentDidMount() {
    this.Databerita();
  }
 
  render() {
    const { isLoading, datas } = this.state;
    return (
      <React.Fragment>
        
          <div className="container judulber">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-primary" role="alert">
                       <h2 className="text-center">Berita Terkini</h2> 
                    </div>
                </div>
                
            </div>
          </div>
 
          
            {!isLoading ? (
              datas.map(data => {
                const {
                  name,
                  title,
                  description,
                  image,
                  url,
                  content,
                  create
                } = data;
 
                return (
                  <div key={data.title} className='container testi'>
                  
                        <div className="col-md-3 kiri">
                            <img className='img-fluid' src={image} alt='images' />
                            <div className='content-detail'>
                            <span>{create}</span>
                            <h4 className='title'>{title}</h4>
                            <p className='desc'>{description}</p>
                            <h5 className='content-name'>{name}</h5>
                            <p className='content'>{content}</p>

                           <a href={url}> <button className='btn btn-info'>Baca Selengkapnya.....</button></a>
                            
                            </div>
                        </div>
                   
                  </div>
                );
              })
            ) : (
            
            <div className="container">
                 <p className="text-center">Sabaaarr euy...</p>
            </div>
             
            )}
         
        
      </React.Fragment>
    );
  }
}
 
export default News;