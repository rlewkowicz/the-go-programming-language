//--------------------------GE Standard PAC File------------------------------------------
// Owner: @CORP PAC Support
// Template - Master
// Name - CSSpaAAA0000002, CSS=shared, pa=PAC, A=Americas, AA=Americas Wide, 00000, 02
// Version - 1.0.0.285
// LastChange - 09-Jan-2018
//----------------------------------------------------------------------------------------
// Define Proxies here
var Main_Proxy        = "PROXY PITC-Zscaler-Americas-Alpharetta3PR.proxy.corporate.ge.com:80";
var Other_Proxy       = "PROXY None";
var Other_Proxy2      = "PROXY None";
var pZen              = "PROXY PITC-Zscaler-Americas-Alpharetta3PR.proxy.corporate.ge.com:80";
var AD_Proxy          = "PROXY adproxy.o365.ge.com:443";
var EXOL_ExpressRoute = "PROXY exol.proxy.ge.com:80";
// End of ProxyList

// Variable to store IP Address Validation RegEx, Used in function FindProxyForURL
var ipv4addr = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

// All PAC entries will go in HOSTS Array.
var HOSTS = [];

HOSTS = {
    // Only GE Internal Domains are supposed to go in SplitDNSDomains.
    SplitDNSDomains: [
        ".alstom.com",
        ".amazonaws.com",
        ".areva-td.com",
        ".bakerhughes.com",
        ".esca.com",
        ".ge.com",
        ".geae.com",
        ".gs-inc.com"
    ],
    //EndSplitDNSDomains

    // for external third parties which permits traffic only for GE specific subnets.
    SendToZen: [
        "*-one-self.gehealthcare.at",
        "*-one-self.gehealthcare.be",
        "*-one-self.gehealthcare.de",
        "*-one-self.gehealthcare.dk",
        "*-one-self.gehealthcare.es",
        "*-one-self.gehealthcare.fi",
        "*-one-self.gehealthcare.fr",
        "*-one-self.gehealthcare.it",
        "*-one-self.gehealthcare.no",
        "*-one-self.gehealthcare.se",
        "*-services.gehealthcare.ca",
        "*-services.gehealthcare.co.uk",
        "*-services.gehealthcare.com",
        "*-services.gehealthcare.com.au",
        "*-services.gehealthcare.com.br",
        "*-services.gehealthcare.in",
        "*-services.gehealthcare.jp",
        "*-services.gehealthcare.sa",
        ".aws-usw02-pr.predix.io",
        ".fxall.com",
        ".gecis.io",
        ".ice.predix.io",
        ".internalapmnow.com",
        ".jsfvpc.lmtas.com",
        ".markit.com",
        ".markitserv.com",
        ".predix.com",
        "63.80.119.*",
        "65.216.161.*",
        "66.161.236.245",
        "apps.inpo.org",
        "beta.inpo.org",
        "cefswa.ubs.com",
        "channelconnect.ge.com",
        "confirmations.swapswire.com",
        "csg.delta.com",
        "csrc-snd.predix.io",
        "csrc.predix.io",
        "e-katalog.lkpp.go.id",
        "fileshare.inpo.org",
        "fileshareqa.inpo.org",
        "github.devtools.predix.io",
        "inpoappsqa.inpo.org",
        "login.inpo.org",
        "loginqa.inpo.org",
        "nfuse.delta.com",
        "secure-xfer.ubs.com",
        "secure.trioptima.com",
        "solutions.mckinsey.com",
        "spwebapps.inpo.org",
        "vmi.datalliance.net",
        "web.inpo.org",
        "www.cscfinancialonline.com",
        "www.lkpp.go.id"
    ],
    //EndSendToZen

    // Destination Host which must go via regional proxy due to Local law or other proxies like GDC Parent Proxies
    SendToOtherProxy: [],
    //EndSendToOtherProxy

    SendToOtherProxy2: [],
    //EndSendToOtherProxy2

    // Default rule sends everything to proxy, Some Hosts may be hosted on external webservers
    // and needs to go via Proxy - Ex. www.ge.com, Such exceptions goes here
    SendToProxy: [
        "*cqd.lync.com",
        "accessext.genpact.com",
        "apps.converteam.com",
        "autodiscover.gecompany.mail.onmicrosoft.com",
        "autodiscover.wayne.com",
        "careers.converteam.com",
        "catalogs.datex-ohmeda.com",
        "citrix.converteam.com",
        "clarientinc.com",
        "cms.whatman.com",
        "critikon.com",
        "csn111svgweb2.corp.dresser.com",
        "dev.wurldtech.com",
        "devices.wurldtech.com",
        "dpintnotes01.dresser.eu",
        "emplois.converteam.com",
        "eur.sabic-ip.com",
        "gateway.genpact.com",
        "ge.com.mx",
        "ge.ramco.com",
        "gehealthcare.net",
        "gesm.osmonics.com",
        "go.additive.ge.com",
        "iimaging.com",
        "iperform.genpact.com",
        "karriere.converteam.com",
        "lunarcorp.com",
        "meridium.com",
        "millbrook.com",
        "my.osmonics.com",
        "mycitrix.genpact.com",
        "mydfts.corp.dresser.com",
        "mymasoneilan.corp.dresser.com",
        "osmonics.com",
        "pcb.converteam.com",
        "photolibrary.converteam.com",
        "pmi-saas-emea.cegedim.com",
        "portal.doosan.com",
        "saab.saabdealer.org",
        "sc.1utcfs.com",
        "secure-transfer.cegedim.com",
        "secure.millbrook.com",
        "servicecenter.firstdataclients.com",
        "shop.osmonics.com",
        "signature-cegepass.cegedim.com",
        "signature-ceremony.cegedim.com",
        "stage.wurldtech.com",
        "stg-catalogs.datex-ohmeda.com",
        "stg-secure.millbrook.com",
        "supportcentral.1utcfs.com",
        "tripleg.com",
        "tripleg.com.au",
        "tsgateway1.meridium.com",
        "values.photochallenge.converteam.com",
        "web.genpact.com",
        "webvpn.doosan.com",
        "webvpn.meridium.com",
        "webvpn1.doosan.com",
        "webvpn2.doosan.com",
        "webvpn3.doosan.com",
        "whatman.com",
        "www.amersham.co.uk",
        "www.amersham.com",
        "www.apbiotech.com",
        "www.api.com",
        "www.applicare.com",
        "www.avio.net",
        "www.cat-rewards.firstdataclients.com",
        "www.converteam.com",
        "www.datex-ohmeda.com",
        "www.doosan.com",
        "www.firstdataclients.com",
        "www.genpact.com",
        "www.gesm.osmonics.com",
        "www.golfchannel.com",
        "www.instru.net",
        "www.instrumentarium.fi",
        "www.ionics.com",
        "www.mdyn.com",
        "www.meridium.com",
        "www.mft3.firstdataclients.com",
        "www.my.osmonics.com",
        "www.nycomed-amersham.com",
        "www.osmonics.com",
        "www.prucka.com",
        "www.rewards.firstdataclients.com",
        "www.tripleg.com",
        "www.wurldtech.com"
    ],
    //EndSendToProxy

    // GE Internal Domains and Hosts goes here
    DoNotSendToProxy: [
        "*ariba.smiths.com",
        "*intranet.smiths.com",
        "*lc.smiths.com",
        "*legal-compliance.smiths.com",
        "*mpc.smiths.com",
        "*mpcreports.smiths.com",
        "*ori.gemoney.ru",
        "*oriuat.gemoney.ru",
        "*oriuat2.gemoney.ru",
        "*pdq.gesdgodc.com",
        "*smiths.aero",
        ".1dc.com",
        ".1utcfs.com",
        ".ad.sys",
        ".aero.bombardier.net",
        ".airbus.corp",
        ".alstom.com",
        ".amazonaws.com",
        ".amersham.co.uk",
        ".amersham.com",
        ".amr.sabic-ip.com",
        ".apac.sabic-ip.com",
        ".apbiotech.com",
        ".api-wi.com",
        ".api.com",
        ".applicare.com",
        ".areva-td.com",
        ".atd.corp",
        ".au.daintree.net",
        ".avio.net",
        ".avio.us",
        ".aviousa.com",
        ".bakerhughes.com",
        ".bankrc.local",
        ".bhicorp.com",
        ".bhinet.com",
        ".boxlocalhost.com",
        ".bph.corp",
        ".cegedim-srh.com",
        ".cegedim.com",
        ".cfsam.com",
        ".chromavision.int",
        ".clarientinc.com",
        ".commerce.reuters.com",
        ".connectsyf.com",
        ".converteam.com",
        ".corp.dresser.com",
        ".critikon.com",
        ".datex-ohmeda.com",
        ".dd",
        ".dev",
        ".dfs.na.deuba.com",
        ".doosan.com",
        ".doosanenc.com",
        ".dresser.com",
        ".dresser.eu",
        ".dtc1.fr.td.sys",
        ".elasticbeanstalk.com",
        ".elgems.com",
        ".eme.sys",
        ".emea.sabic-ip.com",
        ".esca.com",
        ".eur.sabic-ip.com",
        ".firstdataclients.com",
        ".gccc.sabic-ip.com",
        ".ge-alstomenergy.com",
        ".ge.com",
        ".ge.com.mx",
        ".ge.ramco.com",
        ".geae.com",
        ".geam.blackrock.com",
        ".gecdn.com",
        ".gefadigitaloffice.com",
        ".gegdc.ad",
        ".gehealthcare.net",
        ".gemse.fr",
        ".genpact.com",
        ".genworth.net",
        ".global.ad",
        ".global.sabic-ip.com",
        ".golfchannel.com",
        ".gs-inc.com",
        ".gs-int.com",
        ".ibhge.com",
        ".iderms.us",
        ".idm.sabic-ip.com",
        ".igategegdc.com",
        ".iimaging.com",
        ".ikon.org",
        ".ilx.net",
        ".inpo.org",
        ".instru.net",
        ".instrumentarium.fi",
        ".intranet.genpact.com",
        ".intranet.mymoneybank.fr",
        ".ionics.com",
        ".it2cust.com",
        ".jenbach.jenbacher",
        ".lan",
        ".local",
        ".localhost",
        ".lufkin.france",
        ".lunarcorp.com",
        ".lync.com",
        ".markets.reuters.com",
        ".mdyn.com",
        ".mei.com",
        ".meridium.com",
        ".millbrook.com",
        ".myclarient.com",
        ".mymoney.intranet",
        ".mysofi.intranet",
        ".na.ikon.net",
        ".nycomed-amersham.com",
        ".osmonics.com",
        ".oxygen.corp",
        ".oxygentv.corp",
        ".pdx.medicalogic.com",
        ".pii-uk.com",
        ".piipipelinesolutions.com",
        ".polarisdealers.com",
        ".polarisind.com",
        ".polarisindustries.com",
        ".proxyge.com",
        ".prucka.com",
        ".pwrsyst.com",
        ".pwsigner.ark-teknoloji.com",
        ".rationalalmus.geaviation.com",
        ".resource.corp",
        ".ricohonline.net",
        ".ricohus.org",
        ".rservices.com",
        ".rtextrading.reuters.com",
        ".saabdealer.org",
        ".sbic.sbicard.com",
        ".sclnet.com",
        ".services.instinet.com",
        ".sip.reuters.net",
        ".sl.ge",
        ".smartsignal.us",
        ".smiths.aero",
        ".stg-tfayd.com",
        ".supportcentral.gesupply.com",
        ".supportcentral.sabic-ip.com",
        ".tayfd.com",
        ".tcsgegdc.com",
        ".test.reuters.com",
        ".tfayd.com",
        ".tripleg.com",
        ".tripleg.com.au",
        ".us.ricoh.ds",
        ".usacable.net",
        ".usanetworks.com",
        ".vetco.com",
        ".vetcogray.com",
        ".vetcogray.no",
        ".whatman.com",
        ".wurldtech.com",
        ".xtra.reuters.com",
        ".xynet.net",
        ".zenotrac.com",
        "adfs.geappliances.com",
        "artrg.nzta.govt.nz",
        "auohsclib01.us.oracle.com",
        "auohsgeca30.oracleoutsourcing.com",
        "auohsgeca47.oracleoutsourcing.com",
        "auohsgeca69.oracleoutsourcing.com",
        "auohsgewr01.oracleoutsourcing.com",
        "auohsgewr02.oracleoutsourcing.com",
        "auohsgewr03.oracleoutsourcing.com",
        "auohstosh01.oracleoutsourcing.com",
        "autodiscover.*",
        "autodiscover.smflc.co.jp",
        "autodiscovery.geappliances.com",
        "beta.medicalogic.com",
        "bluecitrix.bakerhughes.com",
        "bmsmetcalf.ercgroup.com",
        "bmsstateline.ercgroup.com",
        "bportugal.net",
        "brspbpsapp05.deloitte.com.br",
        "bsz.gironet.giro.hu",
        "caliber.deio.net",
        "catswebprod.edc.cingular.net",
        "chat.sc.ad.shinseifinancial.co.jp",
        "ciclaims.geercgroup.com",
        "cin-empcs-vendorapps.duke-energy.com",
        "clt-empcs-vendorapps.duke-energy.com",
        "connect.dresserwayne.com",
        "corp.riotinto.org",
        "cps.web.att.com",
        "csb2b.geaviationsystems.com",
        "csb2bt.geaviationsystems.com",
        "data.sc.ad.shinseifinancial.co.jp",
        "deio.e-knowasp.com",
        "dev.com",
        "dev.jeff.geblogs.com",
        "dmdcwww01.fandango.com",
        "dosxx.acxiomhosting.com",
        "dverp04.doosanvina.com.vn",
        "dverp18.doosanvina.com.vn",
        "dweb01.fandango.com",
        "e-operations.web.att.com",
        "ebiznet.sbc.com",
        "ehrms.adphc.com",
        "ejf.it.att.com",
        "emprunteur-gemb.sesame-cbp.fr",
        "emprunteur-recettegemb.sesame-cbp.fr",
        "emprunteur.sesame-cbp.fr",
        "enapp.quinnpumps.com",
        "eosvtstaic1.geeos.hu",
        "epp-dweb01.fandango.com",
        "epp-qweb01.fandango.com",
        "erc.gecapital.com",
        "erceaudit.com",
        "ercgrouphipaa.com",
        "financecorp.biz",
        "flrnp.fdnet.com",
        "fnix.fandango.com",
        "formplm.eprnm.edf.fr",
        "ftp02.speedpay.com",
        "ge.hof.co.uk",
        "geam.blackrock.com",
        "gedrive.com",
        "geerc.com",
        "geercdashboard.com",
        "geerchealthcare.com",
        "geglobalunderwriting.com",
        "geolink.att.com",
        "gevu.vingmed.no",
        "gla.geolink.att.com",
        "glhetreaties.geercgroup.com",
        "glheunderwriting.geercgroup.com",
        "hq.medicalogic.com",
        "ilx.net",
        "industrialrisk.com",
        "inkolm*.tcs.com",
        "inside.fandango.com",
        "insidege.com",
        "intranet.use.ucdp.net",
        "iptv.zrh.swissre.com",
        "irctcprod.sbic.sbicard.com",
        "irctcuat.sbic.sbicard.com",
        "killians.acxiomhosting.com",
        "kspz0145.kcdc.att.com",
        "library.sc.ad.shinseifinancial.co.jp",
        "live.ngrid-clm.com",
        "local",
        "local.connectme.us",
        "localhost.localdomain",
        "lufkin.com",
        "maewest.atlprom.att.com",
        "mail.geappliances.com",
        "mail.smflc.co.jp",
        "medprong.geercgroup.com",
        "mmreports.amer.umusic.net",
        "mwtig.mi.sbc.com",
        "my.firewall",
        "myhost.gehealthcare.com",
        "myonlinestore*.gecitsolutions.com",
        "myreinsurance.com",
        "nbo-online.no",
        "net-vision.sita.net",
        "nja76.speedpay.com",
        "noosd001.com",
        "nsdnet.web.att.com",
        "oa.e-i.com",
        "pdm.ideal.com",
        "pdm.idel.com",
        "pfd.cpmarket.com",
        "plf-empcs-vendorapps.duke-energy.com",
        "plm.corporate.lufkin.com",
        "plm.eprnm.edf.fr",
        "pmijpwebsblp01.app.pmi",
        "portal.sibs.pt",
        "pplsrch.supportcentral.synchronyfinancial.com",
        "production.wayne.com",
        "qmdcwww01.fandango.com",
        "quadrant.statestr.com",
        "quinnpumps.com",
        "qweb01.fandango.com",
        "rc.gecapital.com",
        "registers.nzta.govt.nz",
        "remote.geappliances.com",
        "remoteoffice.ams.com.au",
        "sc.ad.shinseifinancial.co.jp",
        "sc.synchronyfinancial.com",
        "scg.hostedeet.com",
        "search.sc.ad.shinseifinancial.co.jp",
        "servicedesk.itt.att.com",
        "servicedesk.tipeurope.com",
        "sharepoint.industrea.co",
        "sharepoint.use.ucdp.net",
        "sip.reuters.net",
        "softwarecert.usc.swissre.com",
        "spreports.accentonline.com",
        "srvspeq.dresserconsolidated.com",
        "stage.jeff.geblogs.com",
        "statebanktimes.in",
        "stssky.smflc.co.jp",
        "supportcentral.gesupply.com",
        "sydtefwb1commge.gecommercial.com.au",
        "tabdb.sbc.com",
        "tcs01hw325310-vm*.tcs.com",
        "test-gefasso.ltcdigitaloffice.com",
        "test.geonline.lv",
        "timecard.wayne.com",
        "tosh1.oraclebol.com",
        "tosh1ftp.oraclebol.com",
        "trapeze.tcs.com",
        "tsapps.gerbc.rbcmtg.com",
        "tss.sbc.com",
        "ttbucolo01.fandango.com",
        "tv-empcs-vendorapps.duke-energy.com",
        "uapit*.sabic-ip.com",
        "ukgcd001.com",
        "uoccr.use.ucdp.net",
        "uoear.use.ucdp.net",
        "uolrp.use.ucdp.net",
        "uowf.use.ucdp.net",
        "usahd001.com",
        "usanetworks.com",
        "usprd001.com",
        "vendor.geolink.att.com",
        "vertigo1.necn.com",
        "vetco.com",
        "vetcogray.com",
        "vetcogray.no",
        "vips.web.att.com",
        "vipsf.tipeurope.com",
        "vpn.geappliances.com",
        "waveqms.wavebiotech.com",
        "wc-master1.corporate.lufkin.com",
        "wc-slave1.corporate.lufkin.com",
        "wc-slave2.corporate.lufkin.com",
        "web.pensketruckleasing.com",
        "webconf.zrh.swissre.com",
        "windchill-repl.corporate.lufkin.com",
        "woodduck.web.att.com",
        "workplace.csc.com",
        "wow.corp.compucom.com",
        "wpcii.insurity.com",
        "www.e-access.att.com",
        "www.e-access.bls.com",
        "www.e-access.cingular.net",
        "www.e-access.sbc.com",
        "www.gemicroapp.com",
        "www.gemicroappdev.com",
        "www.gemicroapppilot.com",
        "www.geolink.att.com",
        "www.ibank.insurity.com",
        "www.iisonline.statestreet.com",
        "www.infodealer.com",
        "xenapp.quinnpumps.com",
        "xww.ge.world.xerox.com"
    ],
    //EndDoNotSendToProxy

    // AD Proxy domains
    SendToADProxy: [ "autodiscover.gecompany.mail.onmicrosoft.com" ],
    //EndSendToADProxy

    // EXOL domains
    SendToExolER: [
        ".private.o365.ge.com",
        "pod51090.outlook.com",
        "pod51098.outlook.com",
        "pod51107.outlook.com"
    ]
    //EndSendEXOLProxy
};
//EndHOSTS

// Function to check if Host is GE Internal IP, called by Used in function FindProxyForURL
// Warning - Use this function only on IP addresses to avoid DNS queries
function isInternalIP(host) {
    "use strict";
    return (
        isInNet(host, "10.0.0.0", "255.0.0.0") ||
        isInNet(host, "127.0.0.0", "255.0.0.0") ||
        isInNet(host, "129.201.0.0", "255.255.0.0") ||
        isInNet(host, "129.202.0.0", "255.255.0.0") ||
        isInNet(host, "147.90.0.0", "255.255.0.0") ||
        isInNet(host, "151.186.0.0", "255.255.0.0") ||
        isInNet(host, "151.95.0.0", "255.255.0.0") ||
        isInNet(host, "155.90.0.0", "255.255.0.0") ||
        isInNet(host, "167.16.0.0", "255.255.0.0") ||
        isInNet(host, "170.14.0.0", "255.255.0.0") ||
        isInNet(host, "170.186.0.0", "255.255.0.0") ||
        isInNet(host, "172.16.0.0", "255.240.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0") ||
        isInNet(host, "192.35.38.0", "255.255.254.0") ||
        isInNet(host, "192.35.40.0", "255.255.254.0") ||
        isInNet(host, "192.88.213.0", "255.255.255.0") ||
        isInNet(host, "198.178.252.0", "255.255.255.0") ||
        isInNet(host, "199.181.101.0", "255.255.255.0") ||
        isInNet(host, "199.181.102.0", "255.255.255.0") ||
        isInNet(host, "20.131.2.0", "255.255.255.0") ||
        isInNet(host, "203.12.79.0", "255.255.255.0") ||
        isInNet(host, "204.124.0.0", "255.255.0.0") ||
        isInNet(host, "206.201.0.0", "255.255.0.0") ||
        isInNet(host, "3.0.0.0", "255.0.0.0") ||
        isInNet(host, "58.2.0.0", "255.255.255.0") ||
        isInNet(host, "58.2.139.0", "255.255.255.0") ||
        isInNet(host, "58.2.47.0", "255.255.255.0") ||
        isInNet(host, "64.101.239.0", "255.255.255.0") ||
        (host == "12.47.84.17") ||
        (host == "131.99.76.121") ||
        (host == "138.66.30.20") ||
        (host == "140.85.171.9") ||
        (host == "140.85.253.19") ||
        (host == "140.85.253.250") ||
        (host == "140.85.253.251") ||
        (host == "140.85.253.252") ||
        (host == "140.85.253.254") ||
        (host == "146.192.196.132") ||
        (host == "146.192.196.151") ||
        (host == "155.195.0.1") ||
        (host == "168.183.239.111") ||
        (host == "168.183.239.112") ||
        (host == "170.70.91.100") ||
        (host == "170.70.91.23") ||
        (host == "192.131.230.144") ||
        (host == "193.15.242.105") ||
        (host == "193.15.242.106") ||
        (host == "193.161.30.184") ||
        (host == "193.182.21.40") ||
        (host == "194.30.165.101") ||
        (host == "194.30.165.104") ||
        (host == "198.151.229.10") ||
        (host == "202.144.30.124") ||
        (host == "202.2.59.12") ||
        (host == "203.0.138.17") ||
        (host == "203.0.138.18") ||
        (host == "203.12.79.76") ||
        (host == "204.90.182.186") ||
        (host == "207.248.70.196") ||
        (host == "207.248.70.197") ||
        (host == "207.248.70.198") ||
        (host == "207.248.70.252") ||
        (host == "207.248.70.44") ||
        (host == "207.248.70.49") ||
        (host == "207.248.70.54") ||
        (host == "208.253.54.125") ||
        (host == "212.239.27.156") ||
        (host == "212.70.166.3") ||
        (host == "212.70.166.4") ||
        (host == "216.46.96.243") ||
        (host == "4.23.177.166") ||
        (host == "58.2.71.98") ||
        (host == "62.184.124.1") ||
        (host == "66.241.52.13") ||
        (host == "67.56.128.1") ||
        (host == "67.56.184.1")
    );
}
//Endfunction isInternalIP

// Function to search  entries in HOSTS Array
function findHostInArray(host, aElements) {
    "use strict";
    var i = aElements.length;
    var h = host.toLowerCase();
    while (i--) {
        // If Host is in array the return true
        if (h === aElements[i]) {
            return true;
        }
        // check if Array entry starts with "."
        if (aElements[i].charAt(0) == '.') {
            // Matches only the Domain part from host (FQDN)  Equivalent to dnsDomainIs function
            if (h.substring(h.length - aElements[i].length, h.length) == aElements[i]) {
                return true;
            } else {
                if (aElements[i].substring(1, aElements[i].length) == h) {
                    return true;
                }
            }
        } else {
            // To match host against wildcard entries in array
            if (aElements[i].indexOf("*") >= 0) {
                if (shExpMatch(h, aElements[i])) {
                    return true;
                }
            }
        }
    }
    return false;
}
//EndFunction findHostInArray

// Main Function
function FindProxyForURL(url, host) {
    "use strict";
    // O365 authentication
    if (findHostInArray(host, HOSTS.SendToADProxy))  return AD_Proxy;

    // Microsoft ExpressRoute for EXOL traffic
    if (findHostInArray(host, HOSTS.SendToExolER))  return EXOL_ExpressRoute;

    // GDC Parent Proxy, Regional Proxy and Other Special Proxies
    if (findHostInArray(host, HOSTS.SendToOtherProxy))  return Other_Proxy;

    // If there are more entries which goes to any other special proxies, then entries goes here
    if (findHostInArray(host, HOSTS.SendToOtherProxy2))  return Other_Proxy2;

    if (ipv4addr.test(host)) {
        if (isInternalIP(host)) {
            return "DIRECT";
        }
    }

    if (isPlainHostName(host)) {
        return "DIRECT";
    }

    if (findHostInArray(host, HOSTS.SendToZen)) {
        return pZen;
    }

    //  Function used to route traffic towards proxy from GE Internal Domains Ex- www.ge.com
    //  A DNS entry for each such host is required in Internal domain with IP as 223.255.255.255
    if (findHostInArray(host, HOSTS.SplitDNSDomains)) {
        if (dnsResolve(host) === "223.255.255.255") {
            return Main_Proxy;
        }
    }

    if (findHostInArray(host, HOSTS.SendToProxy)) {
        return Main_Proxy;
    }

    if (findHostInArray(host, HOSTS.DoNotSendToProxy)) {
        return "DIRECT";
    }

    return Main_Proxy;
}
//Endfunction FindProxyForURL
