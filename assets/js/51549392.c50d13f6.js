"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[7219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||r;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={title:"Time Machine"},o=void 0,s={unversionedId:"applications/system-tools/timemachine",id:"applications/system-tools/timemachine",title:"Time Machine",description:"Apple docs:",source:"@site/docs/applications/system-tools/timemachine.md",sourceDirName:"applications/system-tools",slug:"/applications/system-tools/timemachine",permalink:"/docs/applications/system-tools/timemachine",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/system-tools/timemachine.md",tags:[],version:"current",frontMatter:{title:"Time Machine"},sidebar:"tutorialSidebar",previous:{title:"Syncthing",permalink:"/docs/applications/system-tools/syncthing"},next:{title:"Watchtower",permalink:"/docs/applications/system-tools/watchtower"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2},{value:"Upgrading from AFP to SMB-based Time Machine",id:"upgrading-from-afp-to-smb-based-time-machine",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apple docs: ",(0,a.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT201250"},"https://support.apple.com/en-us/HT201250")),(0,a.kt)("p",null,"Docker image: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/awlx/samba-timemachine"},"https://github.com/awlx/samba-timemachine")),(0,a.kt)("p",null,"Time Machine is an application that allows you to backup files from your Mac."),(0,a.kt)("p",null,'Older versions of Time Machine relied on AFP (netatalk) shares. Apple has deprecated Time Machine over AFP in favor of SMB (Samba), and current versions of Ansible-NAS use a Samba-based Time Machine share. If you are upgrading from an older version of Ansible-NAS, you will need to re-select your Time Machine back up disk by opening Time Machine Preferences and Selecting your backup disk via the "Select Disk..." option. Your Mac will find the old backups on the share and use them.'),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"timemachine_enabled: true")," in your ",(0,a.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,a.kt)("p",null,"Enabling Time Machine will result in the installation of Avahi on the NAS system (if it is not already installed) and a Time Machine service configuration file for Avahi will be added to the system (at ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/avahi/services/timemachine.service"),") to allow for Time Machine discovery by Macs on the local network. Avahi runs on the system, rather than in a container, as the same Avahi instance can be used to announce any number of services."),(0,a.kt)("p",null,"The Samba server included in the Time Machine docker container logs to ",(0,a.kt)("inlineCode",{parentName:"p"},"STDOUT")," and is compatible with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/containers/logging/"},"Docker's built-in logging infrastructure.")),(0,a.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timemachine_data_directory"),": The absolute path on Ansible NAS where the backup files will be stored"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timemachine_volume_size_limit"),": The maximum amount of space Time Machine can use for the backups in units of MiB.  Set it to 0 for no limit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timemachine_share_name"),": The name of the share as it will appear in the Time Machine application. Default is 'Data'"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timemachine_password"),": The password used to access the share.  Default is 'timemachine'")),(0,a.kt)("h2",{id:"upgrading-from-afp-to-smb-based-time-machine"},"Upgrading from AFP to SMB-based Time Machine"),(0,a.kt)("p",null,'Older versions of Time Machine included in Ansible-NAS relied on AFP (netatalk) shares. Apple has deprecated Time Machine over AFP in favor of SMB (Samba), and current versions of Ansible-NAS use a Samba-based Time Machine share. If you are upgrading from an older version of Ansible-NAS with the AFP-based Time Machine, you will need to re-select your Time Machine back up disk by opening Time Machine Preferences and Selecting your backup disk via the "Select Disk..." option. Your Mac will find the old backups on the share and use them.'))}m.isMDXComponent=!0}}]);