import * as React from 'react';
import styles from './SolutionPatnerModern.module.scss';
import { ISolutionPatnerModernProps } from './ISolutionPatnerModernProps';
import Service from './Service';

import {Stack,IStackStyles,ChoiceGroup,IChoiceGroupOption} from 'office-ui-fabric-react'; 

import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";

import { Dropdown, IDropdownStyles,IDropdownOption} from 'office-ui-fabric-react/lib/Dropdown';

import { DateTimePicker, DateConvention } from '@pnp/spfx-controls-react/lib/dateTimePicker';  

//const sectionStackTokens: IStackTokens = { childrenGap: 10 };
import {PrimaryButton } from 'office-ui-fabric-react/lib/Button';

import {Icon} from 'office-ui-fabric-react/lib/Icon';

const stackTokens = { childrenGap: 50 };

const stackStyles: Partial<IStackStyles> = { root: { padding: 10} };

const RadioArragnments: IChoiceGroupOption[] = 

[  { key: "TA", text: "Teaming Arrangement" },{ key: "PA", text: "Partnership Arrangement" },{ key: "IA", text: "Introducer Arrangement" },{ key: "RA", text: "Reseller Arrangement" }];  


const Radiorefearal: IChoiceGroupOption[] = 
[{key: "Yes", text: "Yes"},{key: "No", text: "No"}]

const RadioCapcoorpatner: IChoiceGroupOption[] = 
[{key: "Capco", text: "Capco"},{key: "partner", text: "partner"}]

const stackButtonStyles: Partial<IStackStyles> = { root: { width: 20 } };

const RadioArgmenttake: IChoiceGroupOption[] = 

 [  { key: "Glb", text: "Global" },{ key: "reg", text: "Regional" },{ key: "cnt", text: "Country" }];  

 const Radiologo: IChoiceGroupOption[] = 

 [  { key: "Yes", text: "Yes" },{ key: "YesPer", text: "Yes, with written permission" },{ key: "No", text: "No" }];  


let SubmitterEmails='';

let PatnerSponsors='';

let RelationManager='';
//let RootUrl = '';

// let Attachmentcount='';

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

export interface ISolutionPatnership{

  solutionpatnercompany:any;
  submitterEmail:any;
  uservalsubmitter:any;
  uservalpatnersponsor:any;
  uservalRelationManager:any;
  patnersponsor:any;
  relationManager:any;
  arragment:any;
  arrangmenttext:any;
  arragmnetplace:any;
  arrangmentplacetext:any;
  bca:any;
  estimatedvalarranment:any;
  CurrencyListItems:any;
  CountryListItems:any;
  RegionListItems:any;
  currval:any;
  globalval:any;
  countryval:any;
  dtcontactdate:Date;
  dtcontractEndDate:Date;
  logo:any;
  logotext:any;
  FileValue:any;
  disableFileUpload:boolean;
  addcomments:any;
  flag:boolean;
  divhide:boolean;
  refearalfee:any;
  capcoorpatner:any;
  divglobal:boolean;
  divcountry:boolean

}


export default class SolutionPatnerModern extends React.Component<ISolutionPatnerModernProps, ISolutionPatnership> {
  
  protected  ppl:any;

  public GlobalService: any;

  public _service: any;

    public constructor(props:ISolutionPatnerModernProps) {
    super(props);

    this.state={

      solutionpatnercompany:"",
      submitterEmail:"",
      uservalsubmitter:[],
      uservalpatnersponsor:[],
      uservalRelationManager:[],
      patnersponsor:"",
      relationManager:"",
      arragment:"",
      arrangmenttext:"",
      arragmnetplace:"",
      arrangmentplacetext:"",
      bca:"",
      estimatedvalarranment:"",
      CurrencyListItems:"",
      CountryListItems:"",
      RegionListItems:"",
      currval:"",
      globalval:"",
      countryval:"",
      dtcontactdate:null,
      dtcontractEndDate:null,
      logo:"",
      logotext:"",
      FileValue:[],
      disableFileUpload:false,
      addcomments:"",
      flag:false,
      divhide:true,
      divcountry:true,
      divglobal:true,
      refearalfee:"",
      capcoorpatner:""

    
      
     };

//RootUrl = this.props.url;

this._service = new Service(this.props.url, this.props.context);

this.GlobalService = new Service(this.props.url, this.props.context);

//console.log(RootUrl);

this.getAllCurrency();
this.getAllCountries();
this.getAllRegions();


    }

    private changesolutionpatnercompany(data: any): void {

      this.setState({ solutionpatnercompany: data.target.value });

    }
         

    public ChangeArrangment(ev: React.FormEvent<HTMLInputElement>, option: any): void {  

            this.setState({  
      
              arragment: option.key  

                    
              });  


              this.setState({  
      
                arrangmenttext: option.text  
  
              
          
                });  
  


              if(option.key=='IA' || option.key=='RA')
              {

                this.setState({ divhide:false});
              }

              else
              {

                this.setState({ divhide:true});
              }
      
     }

     public Changerefarlfee(ev: React.FormEvent<HTMLInputElement>, option: any): void {  

      this.setState({  

        refearalfee: option.key  
  
        });  
      

}


public Changecapcoorpatner(ev: React.FormEvent<HTMLInputElement>, option: any): void {  

  this.setState({  

    capcoorpatner: option.key  

    });  
  

}

     public ChangeArrangeplace(ev: React.FormEvent<HTMLInputElement>, option: any): void {  

      this.setState({  

        arragmnetplace: option.key  
  
        });  

        this.setState({

          arrangmentplacetext:option.text
        });

        if(option.key=='cnt')
        {

          this.setState({  

            divcountry:false
      
            });  

            this.setState({  

              divglobal:true
        
              }); 
        }

       if(option.key=='Glb')
        {

          this.setState({  

            divcountry:true
      
            });  

            this.setState({  

              divglobal:true
        
              }); 
          
        }

         if(option.key=='reg')
        {

          this.setState({  

            divcountry:true
      
            });  

            this.setState({  

              divglobal:false
        
              }); 
          
        }

}

    private async _getPeoplePickerItemsSubmiteerEmail(items: any[]) {
      console.log('Items:', items);
  
      if(items.length>0)
      {
  
        SubmitterEmails = items[0].text;

        console.log(SubmitterEmails);
  
        let userInfo = this._service.getUserByLogin(items[0].loginName).then((info:any)=>{
        this.setState({uservalsubmitter:info});
        console.log(info);
        console.log(userInfo);
   });
  
      }
  
      else
      {
  
        this.setState({uservalsubmitter:null});
      }
  
      //this.ppl.onChange([]);
  
    }

    private async _getPeoplePickerItemsPatnerSponsor(items: any[]) {
      console.log('Items:', items);
  
      if(items.length>0)
      {
  
        PatnerSponsors = items[0].text;

        console.log(PatnerSponsors);
  
        let userInfo = this._service.getUserByLogin(items[0].loginName).then((info:any)=>{
        this.setState({uservalpatnersponsor:info});
        console.log(info);
        console.log(userInfo);
   });
  
      }
  
      else
      {
  
        this.setState({uservalpatnersponsor:null});
      }
  
      //this.ppl.onChange([]);
  
    }

    private async _getPeoplePickerItemsrelationManager(items: any[]) {
      console.log('Items:', items);
  
      if(items.length>0)
      {
  
        RelationManager = items[0].text;

        console.log(RelationManager);
  
        let userInfo = this._service.getUserByLogin(items[0].loginName).then((info:any)=>{
        this.setState({uservalRelationManager:info});
        console.log(info);
        console.log(userInfo);
   });
  
      }
  
      else
      {
  
        this.setState({uservalRelationManager:null});
      }
  
      //this.ppl.onChange([]);
  
    }

    private changebca(data: any): void {

      this.setState({ bca: data.target.value });

    }

    private changeaddcomments(data: any): void {

      this.setState({ addcomments: data.target.value });

    }

    private changeesa(data: any): void {

      this.setState({ estimatedvalarranment: data.target.value });

    }

    

    public async getAllCurrency() {

      //var myCurrencyLocal: any = [];
  
      var data = await this._service.GetAllCuurency();
  
      console.log(data);
  
      var AllCuurenctTypes: any = [];
  
      for (var k in data) {
  
        AllCuurenctTypes.push({ key: data[k].ID, text: data[k].Title });
      }
  
      console.log(AllCuurenctTypes);
  
      this.setState({ CurrencyListItems: AllCuurenctTypes });
  
    }
    public async getAllCountries() {

      //var myCurrencyLocal: any = [];
  
      var data = await this._service.GetAllCountries();
  
      console.log(data);
  
      var AllContrytpes: any = [];
  
      for (var k in data) {
  
        AllContrytpes.push({ key: data[k].ID, text: data[k].Title });
      }
  
      console.log(AllContrytpes);
  
      this.setState({ CountryListItems: AllContrytpes });
  
    }

    public async getAllRegions() {

      //var myCurrencyLocal: any = [];
  
      var data = await this._service.GetAllRegionals();
  
      console.log(data);
  
      var AllRegionsTypes: any = [];
  
      for (var k in data) {
  
        AllRegionsTypes.push({ key: data[k].ID, text: data[k].Title });
      }
  
      console.log(AllRegionsTypes);
  
      this.setState({ RegionListItems: AllRegionsTypes });
  
    }
  
    public handleContractDateChange = (date: any) => {

      this.setState({ dtcontactdate: date });
  
      
      }

      public handleContractEndDateChange= (date: any) => {

        this.setState({ dtcontractEndDate: date });
    
        
        }

        public handleChangecurrency(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

          //this.setState({currval: defaultState});
          
          this.setState({ currval: item.key });
              
        }

        public  handleChangecountry(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

          //this.setState({currval: defaultState});
          
          this.setState({ countryval: item.key });

              
        }

        public handleChangeglobal(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void {

          //this.setState({currval: defaultState});
          
          this.setState({ globalval: item.key });

     
              
        }


    public ChangeLogo(ev: React.FormEvent<HTMLInputElement>, option: any): void {  

          this.setState({  
    
            logo: option.key  
      
            });  

            this.setState({  
    
              logotext: option.text  
        
              });  
    
    }

    private changeFileupload(data: any) {

      let LocalFileVal= this.state.FileValue;
      
       LocalFileVal.push(data.target.files[0]);
      
      
      this.setState({FileValue:LocalFileVal});

      //Attachmentcount=this.state.FileValue.length;
      
      if(this.state.FileValue.length>4)
      {
      this.setState({disableFileUpload:true});
      
      }
      
      
      }
      
      private _removeItemFromDetail(Item: any) {
        console.log("itemId: " + Item.name); 
      
       let localFileValues=[];
      
       localFileValues=this.state.FileValue;
      
       if(localFileValues.length==1)
       {
      
        localFileValues=[];
       }
      
      
        for(var count=0;count<localFileValues.length;count++)
        {
      
          if(localFileValues[count].name==Item.name)
            {
              let Index=count;
      
              localFileValues.splice(Index,count);
      
            }
      
        }
      
        this.setState({FileValue:localFileValues,disableFileUpload:false});
      
      
      }

      private OnBtnClick() :void {

      

if(this.state.solutionpatnercompany==null || this.state.solutionpatnercompany=='')
{
  alert('Please enter Solution Partner Company Name');
  this.setState({ flag: false });
}

  else if(SubmitterEmails==null || SubmitterEmails=='')
  {

     alert('Please select submitters Email');
     this.setState({ flag: false });

  }

  else if(PatnerSponsors==null || PatnerSponsors=='')
  {

     alert('Please select Partner Sponsor Name');
     this.setState({ flag: false });

  }

    else if(RelationManager==null || RelationManager=='')
  {

     alert('Please select Relation Manager Name');
     this.setState({ flag: false });

  }

  
else if(this.state.arragment==null || this.state.arragment=="")
  {

    alert('Please Select Type of Arrangement');
    this.setState({ flag: false });

  }

else if(this.state.arragment=='TA' || this.state.arragment=='PA')
{

if(this.state.arragmnetplace==null || this.state.arragmnetplace=="")
{

   alert('Please select arrangment place');
   this.setState({ flag: false });

}

else if(this.state.arragmnetplace=='Glb')
{

if(this.state.bca==null || this.state.bca=="")
{

  alert('Please enter Bussiness Arrangement');
  this.setState({ flag: false });

}

else if(this.state.estimatedvalarranment==null || this.state.estimatedvalarranment=="")
{

  alert('Please enter Estimated value of Arrangement');
  this.setState({ flag: false });

}

else if (this.state.currval == null || this.state.currval == 'Select  Currency Value'|| this.state.currval == "") {

alert('Please select  currency Value');
this.setState({ flag: false });         
      
}

else if(this.state.dtcontactdate==null)
{

  alert('Please Select Contract Signed Date');
  this.setState({ flag: false });

}

else if(this.state.dtcontractEndDate==null)
{

  alert('Please Select Contract End Date');
  this.setState({ flag: false });

}
else if(this.state.logo==null|| this.state.logo=="")
{
  alert('Please select logo');
  this.setState({ flag: false });

}

else if(this.state.FileValue.length==0)
{

  alert('Please upload attachment');
  this.setState({ flag: false });
}

else
{

 
    

  
    let date = new Date();

    date.setDate(this.state.dtcontactdate.getDate());;

    let month= (this.state.dtcontactdate.getMonth()+1);

    let year =(this.state.dtcontactdate.getFullYear());

    let contractdate=this.state.dtcontactdate.getDate()+'/' + month +'/' +year;


    let date1 = new Date();

    date1.setDate(this.state.dtcontractEndDate.getDate());;

    let month1= (this.state.dtcontractEndDate.getMonth()+1);

    let year1 =(this.state.dtcontractEndDate.getFullYear());

    let contractEnddate=this.state.dtcontractEndDate.getDate()+'/' + month1 +'/' +year1;

    let myfiles=[];

    for(var count=0;count<this.state.FileValue.length;count++)
    {
      
      myfiles.push(this.state.FileValue[count]);
    }

   
    this._service.Save(
    this.state.solutionpatnercompany,
    (this.state.uservalsubmitter == null ? 0:this.state.uservalsubmitter.Id),
    (this.state.uservalpatnersponsor == null ? 0:this.state.uservalpatnersponsor.Id),
    (this.state.uservalRelationManager == null ? 0:this.state.uservalRelationManager.Id),
    this.state.arrangmenttext,
    this.state.refearalfee,
    this.state.capcoorpatner,
    this.state.arrangmentplacetext,
    (this.state.globalval==""?0:this.state.globalval),
    (this.state.countryval==""?0:this.state.countryval),
    this.state.bca,
    this.state.estimatedvalarranment,
    (this.state.currval==""?0:this.state.currval),
    contractdate,
    contractEnddate,
    this.state.logotext,
    
    this.state.addcomments,
    myfiles).then(function (data:any)
    {
      console.log(data);

      alert('Record submitted successfully');

      window.location.replace("https://capcoinc.sharepoint.com/sites/SolutionPartnershipDatabaseSubmission/SitePages/Solution-Partnership-Arr.aspx");
  

           
    });

   
  

}


}

else if(this.state.arragmnetplace=='reg')
{

  if(this.state.globalval=='')
    {

      alert('please select Region');
  }

else if(this.state.bca==null || this.state.bca=="")
{

  alert('Please enter Bussiness Arrangement');
  this.setState({ flag: false });

}

else if(this.state.estimatedvalarranment==null || this.state.estimatedvalarranment=="")
{

  alert('Please enter Estimated value of Arrangement');
  this.setState({ flag: false });

}

else if (this.state.currval == null || this.state.currval == 'Select  Currency Value'|| this.state.currval == "") {

alert('Please select  currency Value');
this.setState({ flag: false });         
      
}

else if(this.state.dtcontactdate==null)
{

  alert('Please Select Contract Signed Date');
  this.setState({ flag: false });

}

else if(this.state.dtcontractEndDate==null)
{

  alert('Please Select Contract End Date');
  this.setState({ flag: false });

}
else if(this.state.logo==null|| this.state.logo=="")
{
  alert('Please select logo');
  this.setState({ flag: false });

}

else if(this.state.FileValue.length==0)
{

  alert('Please upload attachment');
  this.setState({ flag: false });
}

else
{

 
   

  
    let date = new Date();

    date.setDate(this.state.dtcontactdate.getDate());;

    let month= (this.state.dtcontactdate.getMonth()+1);

    let year =(this.state.dtcontactdate.getFullYear());

    let contractdate=this.state.dtcontactdate.getDate()+'/' + month +'/' +year;


    let date1 = new Date();

    date1.setDate(this.state.dtcontractEndDate.getDate());;

    let month1= (this.state.dtcontractEndDate.getMonth()+1);

    let year1 =(this.state.dtcontractEndDate.getFullYear());

    let contractEnddate=this.state.dtcontractEndDate.getDate()+'/' + month1 +'/' +year1;

    let myfiles=[];

    for(var count=0;count<this.state.FileValue.length;count++)
    {
      
      myfiles.push(this.state.FileValue[count]);
    }

   
    this._service.Save(
    this.state.solutionpatnercompany,
    (this.state.uservalsubmitter == null ? 0:this.state.uservalsubmitter.Id),
    (this.state.uservalpatnersponsor == null ? 0:this.state.uservalpatnersponsor.Id),
    (this.state.uservalRelationManager == null ? 0:this.state.uservalRelationManager.Id),
    this.state.arrangmenttext,
    this.state.refearalfee,
    this.state.capcoorpatner,
    this.state.arrangmentplacetext,
    (this.state.globalval==""?0:this.state.globalval),
    (this.state.countryval==""?0:this.state.countryval),
    this.state.bca,
    this.state.estimatedvalarranment,
    (this.state.currval==""?0:this.state.currval),
    contractdate,
    contractEnddate,
    this.state.logotext,
    
    this.state.addcomments,
    myfiles).then(function (data:any)
    {
      console.log(data);

      alert('Record submitted successfully');

      window.location.replace("https://capcoinc.sharepoint.com/sites/SolutionPartnershipDatabaseSubmission/SitePages/Solution-Partnership-Arr.aspx");
  

           
    });

   
  

}

}

else if(this.state.arragmnetplace=='cnt')
{

if(this.state.countryval=='')
 {

alert('please select country');
}

else if(this.state.bca==null || this.state.bca=="")
{

  alert('Please enter Bussiness Arrangement');
  this.setState({ flag: false });

}

else if(this.state.estimatedvalarranment==null || this.state.estimatedvalarranment=="")
{

  alert('Please enter Estimated value of Arrangement');
  this.setState({ flag: false });

}

else if (this.state.currval == null || this.state.currval == 'Select  Currency Value'|| this.state.currval == "") {

alert('Please select  currency Value');
this.setState({ flag: false });         
      
}

else if(this.state.dtcontactdate==null)
{

  alert('Please Select Contract Signed Date');
  this.setState({ flag: false });

}

else if(this.state.dtcontractEndDate==null)
{

  alert('Please Select Contract End Date');
  this.setState({ flag: false });

}
else if(this.state.logo==null|| this.state.logo=="")
{
  alert('Please select logo');
  this.setState({ flag: false });

}

else if(this.state.FileValue.length==0)
{

  alert('Please upload attachment');
  this.setState({ flag: false });
}

else
{

 
    

  
    let date = new Date();

    date.setDate(this.state.dtcontactdate.getDate());;

    let month= (this.state.dtcontactdate.getMonth()+1);

    let year =(this.state.dtcontactdate.getFullYear());

    let contractdate=this.state.dtcontactdate.getDate()+'/' + month +'/' +year;


    let date1 = new Date();

    date1.setDate(this.state.dtcontractEndDate.getDate());;

    let month1= (this.state.dtcontractEndDate.getMonth()+1);

    let year1 =(this.state.dtcontractEndDate.getFullYear());

    let contractEnddate=this.state.dtcontractEndDate.getDate()+'/' + month1 +'/' +year1;

    let myfiles=[];

    for(var count=0;count<this.state.FileValue.length;count++)
    {
      
      myfiles.push(this.state.FileValue[count]);
    }

   
    this._service.Save(
    this.state.solutionpatnercompany,
    (this.state.uservalsubmitter == null ? 0:this.state.uservalsubmitter.Id),
    (this.state.uservalpatnersponsor == null ? 0:this.state.uservalpatnersponsor.Id),
    (this.state.uservalRelationManager == null ? 0:this.state.uservalRelationManager.Id),
    this.state.arrangmenttext,
    this.state.refearalfee,
    this.state.capcoorpatner,
    this.state.arrangmentplacetext,
    (this.state.globalval==""?0:this.state.globalval),
    (this.state.countryval==""?0:this.state.countryval),
    this.state.bca,
    this.state.estimatedvalarranment,
    (this.state.currval==""?0:this.state.currval),
    contractdate,
    contractEnddate,
    this.state.logotext,
    
    this.state.addcomments,
    myfiles).then(function (data:any)
    {
      console.log(data);

      alert('Record submitted successfully');

      window.location.replace("https://capcoinc.sharepoint.com/sites/SolutionPartnershipDatabaseSubmission/SitePages/Solution-Partnership-Arr.aspx");
  

           
    });

   
  

}




}



}

 else if(this.state.arragment=='IA' || this.state.arragment=='RA')
  {

    if(this.state.refearalfee=="")
   {

    alert('Please Select Referral Fee');
    this.setState({ flag: false });
   }

   else if(this.state.capcoorpatner=="")
   {

    alert('Please Select Capco or Partner');
    this.setState({ flag: false });
   }


else if(this.state.arragmnetplace==null || this.state.arragmnetplace=="")
{

  alert('Please select arrangment place');
  this.setState({ flag: false });

}

else if(this.state.arragmnetplace=='Glb')
{

if(this.state.bca==null || this.state.bca=="")
{

  alert('Please enter Bussiness Arrangement');
  this.setState({ flag: false });

}

else if(this.state.estimatedvalarranment==null || this.state.estimatedvalarranment=="")
{

  alert('Please enter Estimated value of Arrangement');
  this.setState({ flag: false });

}

else if (this.state.currval == null || this.state.currval == 'Select  Currency Value'|| this.state.currval == "") {

alert('Please select  currency Value');
this.setState({ flag: false });         
      
}

else if(this.state.dtcontactdate==null)
{

  alert('Please Select Contract Signed Date');
  this.setState({ flag: false });

}

else if(this.state.dtcontractEndDate==null)
{

  alert('Please Select Contract End Date');
  this.setState({ flag: false });

}
else if(this.state.logo==null|| this.state.logo=="")
{
  alert('Please select logo');
  this.setState({ flag: false });

}

else if(this.state.FileValue.length==0)
{

  alert('Please upload attachment');
  this.setState({ flag: false });
}

else
{

 
    

  
    let date = new Date();

    date.setDate(this.state.dtcontactdate.getDate());;

    let month= (this.state.dtcontactdate.getMonth()+1);

    let year =(this.state.dtcontactdate.getFullYear());

    let contractdate=this.state.dtcontactdate.getDate()+'/' + month +'/' +year;


    let date1 = new Date();

    date1.setDate(this.state.dtcontractEndDate.getDate());;

    let month1= (this.state.dtcontractEndDate.getMonth()+1);

    let year1 =(this.state.dtcontractEndDate.getFullYear());

    let contractEnddate=this.state.dtcontractEndDate.getDate()+'/' + month1 +'/' +year1;

    let myfiles=[];

    for(var count=0;count<this.state.FileValue.length;count++)
    {
      
      myfiles.push(this.state.FileValue[count]);
    }

   
    this._service.Save(
    this.state.solutionpatnercompany,
    (this.state.uservalsubmitter == null ? 0:this.state.uservalsubmitter.Id),
    (this.state.uservalpatnersponsor == null ? 0:this.state.uservalpatnersponsor.Id),
    (this.state.uservalRelationManager == null ? 0:this.state.uservalRelationManager.Id),
    this.state.arrangmenttext,
    this.state.refearalfee,
    this.state.capcoorpatner,
    this.state.arrangmentplacetext,
    (this.state.globalval==""?0:this.state.globalval),
    (this.state.countryval==""?0:this.state.countryval),
    this.state.bca,
    this.state.estimatedvalarranment,
    (this.state.currval==""?0:this.state.currval),
    contractdate,
    contractEnddate,
    this.state.logotext,
    
    this.state.addcomments,
    myfiles).then(function (data:any)
    {
      console.log(data);

      alert('Record submitted successfully');

      window.location.replace("https://capcoinc.sharepoint.com/sites/SolutionPartnershipDatabaseSubmission/SitePages/Solution-Partnership-Arr.aspx");
  

           
    });

   
  

}


}

else if(this.state.arragmnetplace=='reg')
{

  if(this.state.globalval=='')
    {

      alert('please select Region');
  }

else if(this.state.bca==null || this.state.bca=="")
{

  alert('Please enter Bussiness Arrangement');
  this.setState({ flag: false });

}

else if(this.state.estimatedvalarranment==null || this.state.estimatedvalarranment=="")
{

  alert('Please enter Estimated value of Arrangement');
  this.setState({ flag: false });

}

else if (this.state.currval == null || this.state.currval == 'Select  Currency Value'|| this.state.currval == "") {

alert('Please select  currency Value');
this.setState({ flag: false });         
      
}

else if(this.state.dtcontactdate==null)
{

  alert('Please Select Contract Signed Date');
  this.setState({ flag: false });

}

else if(this.state.dtcontractEndDate==null)
{

  alert('Please Select Contract End Date');
  this.setState({ flag: false });

}
else if(this.state.logo==null|| this.state.logo=="")
{
  alert('Please select logo');
  this.setState({ flag: false });

}

else if(this.state.FileValue.length==0)
{

  alert('Please upload attachment');
  this.setState({ flag: false });
}

else
{

 
    

  
    let date = new Date();

    date.setDate(this.state.dtcontactdate.getDate());;

    let month= (this.state.dtcontactdate.getMonth()+1);

    let year =(this.state.dtcontactdate.getFullYear());

    let contractdate=this.state.dtcontactdate.getDate()+'/' + month +'/' +year;


    let date1 = new Date();

    date1.setDate(this.state.dtcontractEndDate.getDate());;

    let month1= (this.state.dtcontractEndDate.getMonth()+1);

    let year1 =(this.state.dtcontractEndDate.getFullYear());

    let contractEnddate=this.state.dtcontractEndDate.getDate()+'/' + month1 +'/' +year1;

    let myfiles=[];

    for(var count=0;count<this.state.FileValue.length;count++)
    {
      
      myfiles.push(this.state.FileValue[count]);
    }

   
    this._service.Save(
    this.state.solutionpatnercompany,
    (this.state.uservalsubmitter == null ? 0:this.state.uservalsubmitter.Id),
    (this.state.uservalpatnersponsor == null ? 0:this.state.uservalpatnersponsor.Id),
    (this.state.uservalRelationManager == null ? 0:this.state.uservalRelationManager.Id),
    this.state.arrangmenttext,
    this.state.refearalfee,
    this.state.capcoorpatner,
    this.state.arrangmentplacetext,
    (this.state.globalval==""?0:this.state.globalval),
    (this.state.countryval==""?0:this.state.countryval),
    this.state.bca,
    this.state.estimatedvalarranment,
    (this.state.currval==""?0:this.state.currval),
    contractdate,
    contractEnddate,
    this.state.logotext,
    
    this.state.addcomments,
    myfiles).then(function (data:any)
    {
      console.log(data);

      alert('Record submitted successfully');

      window.location.replace("https://capcoinc.sharepoint.com/sites/SolutionPartnershipDatabaseSubmission/SitePages/Solution-Partnership-Arr.aspx");
  

           
    });

   
  

}

}

else if(this.state.arragmnetplace=='cnt')
{

if(this.state.countryval=='')
 {

alert('please select country');
}

else if(this.state.bca==null || this.state.bca=="")
{

  alert('Please enter Bussiness Arrangement');
  this.setState({ flag: false });

}

else if(this.state.estimatedvalarranment==null || this.state.estimatedvalarranment=="")
{

  alert('Please enter Estimated value of Arrangement');
  this.setState({ flag: false });

}

else if (this.state.currval == null || this.state.currval == 'Select  Currency Value'|| this.state.currval == "") {

alert('Please select  currency Value');
this.setState({ flag: false });         
      
}

else if(this.state.dtcontactdate==null)
{

  alert('Please Select Contract Signed Date');
  this.setState({ flag: false });

}

else if(this.state.dtcontractEndDate==null)
{

  alert('Please Select Contract End Date');
  this.setState({ flag: false });

}
else if(this.state.logo==null|| this.state.logo=="")
{
  alert('Please select logo');
  this.setState({ flag: false });

}

else if(this.state.FileValue.length==0)
{

  alert('Please upload attachment');
  this.setState({ flag: false });
}

else
{

 
  

  
    let date = new Date();

    date.setDate(this.state.dtcontactdate.getDate());;

    let month= (this.state.dtcontactdate.getMonth()+1);

    let year =(this.state.dtcontactdate.getFullYear());

    let contractdate=this.state.dtcontactdate.getDate()+'/' + month +'/' +year;


    let date1 = new Date();

    date1.setDate(this.state.dtcontractEndDate.getDate());;

    let month1= (this.state.dtcontractEndDate.getMonth()+1);

    let year1 =(this.state.dtcontractEndDate.getFullYear());

    let contractEnddate=this.state.dtcontractEndDate.getDate()+'/' + month1 +'/' +year1;

    let myfiles=[];

    for(var count=0;count<this.state.FileValue.length;count++)
    {
      
      myfiles.push(this.state.FileValue[count]);
    }

   
    this._service.Save(
    this.state.solutionpatnercompany,
    (this.state.uservalsubmitter == null ? 0:this.state.uservalsubmitter.Id),
    (this.state.uservalpatnersponsor == null ? 0:this.state.uservalpatnersponsor.Id),
    (this.state.uservalRelationManager == null ? 0:this.state.uservalRelationManager.Id),
    this.state.arrangmenttext,
    this.state.refearalfee,
    this.state.capcoorpatner,
    this.state.arrangmentplacetext,
    (this.state.globalval==""?0:this.state.globalval),
    (this.state.countryval==""?0:this.state.countryval),
    this.state.bca,
    this.state.estimatedvalarranment,
    (this.state.currval==""?0:this.state.currval),
    contractdate,
    contractEnddate,
    this.state.logotext,
    
    this.state.addcomments,
    myfiles).then(function (data:any)
    {
      console.log(data);

      alert('Record submitted successfully');

      window.location.replace("https://capcoinc.sharepoint.com/sites/SolutionPartnershipDatabaseSubmission/SitePages/Solution-Partnership-Arr.aspx");
  

           
    });

   
  

}




}








   

  }





  
  }
      

    public render(): React.ReactElement<SolutionPatnerModern> {


      return (
  
    
        <Stack tokens={stackTokens} styles={stackStyles} >
        <Stack>
        <div id="divdisclousure">  
        <b><label className={styles.labelsFonts}>SOLUTION PARTNER ARRANGEMENT BRIEFING NOTE TEMPLATE</label></b><br></br>
        </div>
        <br/>
        <label className={styles.labelsFonts}>This template should be used to set out the details of the proposed Solution Partner Arrangement and justifications for that arrangement, as required by the Capco Solution Partner Arrangement Policy.</label>
        <br/>
        <b><label className={styles.labelsFonts}>1. SOLUTION PARTNER COMPANY</label></b><br/>
        <div> 
        <input type="text" name="txtsolutionpatnercompany" value={this.state.solutionpatnercompany} onChange={this.changesolutionpatnercompany.bind(this)} className={styles.boxsize}/>
        </div><br/>
        <b><label className={styles.labelsFonts}> 2. SUBMITTER EMAIL</label></b><br/>
        <div className={styles.boxsize}>  
              <PeoplePicker 
                  context={this.props.context}
                  //titleText="User Name"
                  personSelectionLimit={1}
                  showtooltip={true}
                  required={true}
                  disabled={false}
                  onChange={this._getPeoplePickerItemsSubmiteerEmail.bind(this)}
                  showHiddenInUI={false}
                  principalTypes={[PrincipalType.User]}
                  defaultSelectedUsers={(this.state.submitterEmail && this.state.submitterEmail.length) ? [this.state.submitterEmail] : []}
                  ref={c => (this.ppl = c)} 
                  resolveDelay={1000} />  
                  </div>
                  <br/>   

        <b><label className={styles.labelsFonts}> 3. PARTNER SPONSOR</label></b><br/>
        <div className={styles.boxsize}>  
              <PeoplePicker 
                  context={this.props.context}
                  //titleText="User Name"
                  personSelectionLimit={1}
                  showtooltip={true}
                  required={true}
                  disabled={false}
                  onChange={this._getPeoplePickerItemsPatnerSponsor.bind(this)}
                  showHiddenInUI={false}
                  principalTypes={[PrincipalType.User]}
                  defaultSelectedUsers={(this.state.patnersponsor && this.state.patnersponsor.length) ? [this.state.patnersponsor] : []}
                  ref={c => (this.ppl = c)} 
                  resolveDelay={1000} />  
                  </div>
                  <br/>   

        <b><label className={styles.labelsFonts}> 4. RELATIONSHIP MANAGER</label></b><br/>
        <div className={styles.boxsize}>  
              <PeoplePicker 
                  context={this.props.context}
                  //titleText="User Name"
                  personSelectionLimit={1}
                  showtooltip={true}
                  required={true}
                  disabled={false}
                  onChange={this._getPeoplePickerItemsrelationManager.bind(this)}
                  showHiddenInUI={false}
                  principalTypes={[PrincipalType.User]}
                  defaultSelectedUsers={(this.state.relationManager && this.state.relationManager.length) ? [this.state.relationManager] : []}
                  ref={c => (this.ppl = c)} 
                  resolveDelay={1000} />  
                  </div>
                  <br/> 

      <b><label className={styles.labelsFonts}> 5. TYPE OF ARRANGEMENT</label></b><br/>     
      <b><ChoiceGroup className={styles.labelsFonts}  id="rdbarragment"  name="Teaming Arrangement" options={RadioArragnments}   onChange={this.ChangeArrangment.bind(this)}  selectedKey={this.state.arragment}/></b>
      <br/>
      {this.state.divhide== false &&
  
      <div> 
      <b><label className={styles.labelsFonts}> Referral Fees ?</label></b><br/>  
      <b><ChoiceGroup className={styles.labelsFonts}  id="rdbrefaralfess"  name="ReferalFess" options={Radiorefearal}   onChange={this.Changerefarlfee.bind(this)}  selectedKey={this.state.refearalfee}/></b>
      <b><label className={styles.labelsFonts}> Capco or Partner</label></b><br/>  
      <b><ChoiceGroup className={styles.labelsFonts}  id="rdbcapcoorpatner"  name="capcoorpatner" options={RadioCapcoorpatner}   onChange={this.Changecapcoorpatner.bind(this)}  selectedKey={this.state.capcoorpatner}/></b>
      
      <br/>

      </div>

    }
     
      <b><label className={styles.labelsFonts}> 6. WHERE WILL THIS ARRANGMENT TAKE PLACE ?</label></b><br/>     
      <b><ChoiceGroup className={styles.labelsFonts}  id="rdbglobal"  name="Global" options={RadioArgmenttake}   onChange={this.ChangeArrangeplace.bind(this)}  selectedKey={this.state.arragmnetplace}/></b>
      <br/>

      {this.state.divglobal== false &&

      <div> 

      <Dropdown className={styles.labelsFonts}
                placeholder="Select Regional"
                options={this.state.RegionListItems}
                styles={dropdownStyles}
                selectedKey={this.state.globalval ? this.state.globalval : undefined} onChange={this.handleChangeglobal.bind(this)}/>
                <br/>

                </div>

      }

{this.state.divcountry== false &&

                <div> 

                <Dropdown className={styles.labelsFonts}
                placeholder="Select Country"
                options={this.state.CountryListItems}
                styles={dropdownStyles}
                selectedKey={this.state.countryval ? this.state.countryval : undefined} onChange={this.handleChangecountry.bind(this)}/>
                <br/>
                </div>
    }


      <b><label className={styles.labelsFonts}> 7. BUSINESS CASE FOR THE ARRANGEMENT</label></b><br/> 
      <b><label className={styles.labelsFonts}> Describe the potential benefits to Capco of entering into the arrangement and why the arrangement should be put in place. Details of commercial calculations, potential future engagements and other similar details should be included.</label></b><br/>    
      <div>  
      <textarea id="txtBca" value={this.state.bca} onChange={this.changebca.bind(this)} className={styles.textAreacss}></textarea>
      </div><br/>

      <b><label className={styles.labelsFonts}> 7.ESTIMATED VALUE OF THE ARRANGEMENT</label></b><br/> 
      <div> 
      <input type="text" name="txtestimatedvalarragme" value={this.state.estimatedvalarranment} onChange={this.changeesa.bind(this)} className={styles.boxsize}/>
      </div><br/>
      <b><label className={styles.labelsFonts}>8. CURRENCY</label></b><br/>
              <Dropdown className={styles.labelsFonts}
                placeholder="Select Currency"
                options={this.state.CurrencyListItems}
                styles={dropdownStyles}
                selectedKey={this.state.currval ? this.state.currval : undefined} onChange={this.handleChangecurrency.bind(this)}/>
                <br/>
                <b><label className={styles.labelsFonts}>9. CONTRACT SIGNED DATE <label className={styles.redcolr}>*</label></label></b><br/>
        <div className={styles.datesize}> 
        <DateTimePicker  
          dateConvention={DateConvention.Date}  
          showLabels={false}
          value={this.state.dtcontactdate}  
          onChange={this.handleContractDateChange}
          
        />  

</div> <br></br>

<b><label className={styles.labelsFonts}>9. CONTRACT END DATE <label className={styles.redcolr}>*</label></label></b><br/>
        <div className={styles.datesize}> 
        <DateTimePicker  
          dateConvention={DateConvention.Date}  
          showLabels={false}
          value={this.state.dtcontractEndDate}  
          onChange={this.handleContractEndDateChange}
          
        />  

</div> <br></br>


<b><label className={styles.labelsFonts}> 10. CAN WE USE LOGO?</label></b><br/>     
      <b><ChoiceGroup className={styles.labelsFonts}  id="logo"  name="logo" options={Radiologo}   onChange={this.ChangeLogo.bind(this)}  selectedKey={this.state.logo}/></b>
      <br/>

      <b><label className={styles.labelsFonts}>11. Attach contract and any relevant files</label></b><br/>
        <input id="infringementFiles" type="file"  name="files[]"  onChange={this.changeFileupload.bind(this)} disabled={this.state.disableFileUpload}/>
        <br></br>
       
  {this.state.FileValue.map((item:any,index:any) =>(

<div className={styles.padcss}>  
{item.name} <Icon iconName='Delete'  onClick={(event) => {this._removeItemFromDetail(item)}}/>
</div>
))}

<br></br><br></br>
  
  <p>*A maximum of five files may be uploaded</p>
  <br></br>
  <p>*File naming convention should include vendor name, year and agreement type. Example is Capco_2020_TeamingArrangement</p>
  <br></br>     

  <b><label className={styles.labelsFonts}>12. Additional Comments</label></b><br/>
  <div>  
      <textarea id="txtAddcomments" value={this.state.addcomments} onChange={this.changeaddcomments.bind(this)} className={styles.textAreacss}></textarea>
      </div><br/>

      <div>  
  
  <PrimaryButton text="Submit" onClick={this.OnBtnClick.bind(this)} styles={stackButtonStyles} className={styles.Mybutton}/>

  </div>

         </Stack>
         </Stack>
               
  
  
  
                     
        
      );
    }




  }

