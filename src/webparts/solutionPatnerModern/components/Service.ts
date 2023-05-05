import { sp } from "@pnp/sp/presets/all";
import "@pnp/sp/webs";
import "@pnp/sp/folders";
import "@pnp/sp/lists";
import "@pnp/sp/views";
import "@pnp/sp/items";
import "@pnp/sp/site-users/web";
import "@pnp/sp/fields";
import "@pnp/sp/attachments";
import "@pnp/sp/files";


export default class Service {

    public mysitecontext: any;

    public constructor(siteUrl: string, Sitecontext: any) {
        this.mysitecontext = Sitecontext;


        sp.setup({
            sp: {
                baseUrl: siteUrl

            },
        });

    }



    

  public async getUserByLogin(LoginName:string):Promise<any>{
    try{
        const user = await sp.web.siteUsers.getByLoginName(LoginName).get();
        return user;
    }catch(error){
        console.log(error);
    }
}


public async GetAllCuurency():Promise<any>
{

 return await sp.web.lists.getByTitle("Currency").items.select('Title','ID').expand().get().then(function (data) {

 return data;

 


 });
 

}

public async GetAllRegionals():Promise<any>
{

 return await sp.web.lists.getByTitle("Regional").items.select('Title','ID').expand().get().then(function (data) {

 return data;

 


 });
 

}
public async GetAllCountries():Promise<any>
{

 return await sp.web.lists.getByTitle("Country").items.select('Title','ID').expand().get().then(function (data) {

 return data;

 


 });
 

}


public async Save (SolutionPathnerComapnyName:string,
    MySubmitterEmail:string,
    MyPatnerEmail:string,
    MyRelationManager:string,
    MyTypeofarrangment:string,
    Myrefaralfee:string,
    MyCapcoorPatner:string,
    MyTypearrangmentplace:string,
    MyRegionalVal:string,
    MyCountryVal:string,
    MyBussinessarrangment:string,
    Myestimatedvalue:string,
    MyCurrencyValue:string,
    MyContractSignedDate:string,
    MyContractEndDate:string,
    MyLogo:string,
    //MyAttachmentcount:string,
    Mycomments:string,
    acceptedFiles:any)  {

    let Myval='Completed';

    try
    {

    //let Filemal=[];

    let file=acceptedFiles;

    let Varmyval= await sp.web.lists.getByTitle("SolutionPartnershipsAdminArchive").items.add({

  
    SolutionPartnerCompany:SolutionPathnerComapnyName,
    Submitter_x0020_NameId:MySubmitterEmail,
    Partner_x0020_SponsorId:MyPatnerEmail,
    Relationship_x0020_ManagerId:MyRelationManager,
    TypeofArrangement:MyTypeofarrangment,
    ReferralFee:Myrefaralfee,
    Capco_x0020_or_x0020_Partner:MyCapcoorPatner,
    ArrangementPlace:MyTypearrangmentplace,
    RegionalId:MyRegionalVal,
    CountryId:MyCountryVal,
    BusinessCase:MyBussinessarrangment,
    EstimatedValue:Myestimatedvalue,
    CurrencyId:MyCurrencyValue,
    ContractSignedDate:MyContractSignedDate,
    Contract_x0020_End_x0020_Date:MyContractEndDate,
    CanLogoBeUsed:MyLogo,
    Attachments_x0020_Count:acceptedFiles.length,
    Additional_x0020_Comments:Mycomments

    }).then (async r => {
      // this will add an attachment to the item we just created to push t sharepoint list

    for(var count=0;count<file.length;count++)
    {
     await r.item.attachmentFiles.add(file[count].name, file[count]).then(result => {
    console.log(result);

      })

    }

    return Myval;



    })

    

    return Varmyval;

    
  }



  catch (error) {
    console.log(error);
  }


  
 }






}

